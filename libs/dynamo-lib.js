/**
 * This file connects to DynamoDB in the region us-east-1. Notice
 * the promise form of the DynamoDB methods.
 */

import AWS from "aws-sdk";

AWS.config.update({ region: "us-east-1" });

export function call(action, params) {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  return dynamoDb[action](params).promise();
};