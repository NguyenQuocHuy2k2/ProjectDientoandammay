'use strict';
const AWS = require('aws-sdk');

exports.handler = async(event, context) =>{
    const documentClient = new AWS.DynamoDB.DocumentClient();

    let responseBody = "";
    let statusCode = 0;

    const {mssv} = event.pathParameters;

    const params = {
        TableName: "SinhVien",
        Key:{
            mssv: mssv
        }
    };
    try{
        const data = await documentClient.delete(params).promise();
        responseBody = JSON.stringify(data);
        statusCode = 204;

    }
    catch(err){
        responseBody = `Lỗi khi xóa sinh viên: ${err}`;
        statusCode = 403; 
    }
    const response = {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*"
        },
        body: responseBody
    };
    return response;
};