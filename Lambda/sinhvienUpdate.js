'use strict';
const AWS = require('aws-sdk');

exports.handler = async(event, context) =>{
    const documentClient = new AWS.DynamoDB.DocumentClient();

    let responseBody = "";
    let statusCode = 0;

    const {mssv, sinhvienname, sinhviendate, sinhviensex, sinhvienaddress, sinhvienphone, sinhvienmajors, sinhviengroup, sinhvienethnic} = JSON.parse(event.body);

    const params = {
        TableName: "SinhVien",
        Key:{
            mssv: mssv
        },
        UpdateExpression: "set sinhvienname = :a, sinhviendate = :b, sinhviensex = :c, sinhvienaddress = :d, sinhvienphone = :e, sinhvienmajors = :f, sinhviengroup = :g, sinhvienethnic = :h",
        ExpressionAttributeValues: {
            ":a": sinhvienname,
            ":b": sinhviendate,
            ":c": sinhviensex,
            ":d": sinhvienaddress,
            ":e": sinhvienphone,
            ":f": sinhvienmajors,
            ":g": sinhviengroup,
            ":h": sinhvienethnic
        },
        ReturnValues: "UPDATED_NEW"
    };
    try{
        const data = await documentClient.update(params).promise();
        responseBody = JSON.stringify(data);
        statusCode = 204;

    }
    catch(err){
        responseBody = `Cập nhật sinh viên thất bại: ${err}`;
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