'use strict';
const AWS = require('aws-sdk');

exports.handler = async(event, context) =>{
    const documentClient = new AWS.DynamoDB.DocumentClient();

    let responseBody = "";
    let statusCode = 0;

    const {mssv, sinhvienname, sinhviendate, sinhviensex, sinhvienaddress, sinhvienphone, sinhvienmajors, sinhviengroup, sinhvienethnic} = JSON.parse(event.body);

    const params = {
        TableName: "SinhVien",
        Item:{
        mssv: mssv,
        sinhvienname: sinhvienname,
        sinhviendate: sinhviendate,
        sinhviensex: sinhviensex,
        sinhvienaddress: sinhvienaddress,
        sinhvienphone: sinhvienphone,
        sinhvienmajors: sinhvienmajors,
        sinhviengroup: sinhviengroup,
        sinhvienethnic: sinhvienethnic
    }
    };
    try{
        const data = await documentClient.put(params).promise();
        responseBody = JSON.stringify(data);
        statusCode = 201;

    }
    catch(err){
        responseBody = `Lỗi khi thêm sinh viên: ${err}`;
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
