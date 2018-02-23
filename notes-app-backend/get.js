/**
 * API will get a note given its id
 * To test this function: serverless invoke local --function get --path mocks/get-event.json
 */

import * as dynamoDbLib from "./libs/dynamo-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {
    const params = {
        TableName: "notes",
        Key: {
            userId: event.requestContext.identity.cognitoIdentityId,
            noteId: event.pathParameters.id
        }
    };

    try {
        const result = await dynamoDbLib.call("get", params);
        if (result.Item) {
            callback(null, success(result.Item));
        } else {
            callback(null, failure({ status: false, error: "Item not found" }));
        }
    } catch (e) {
        callback(null, failure({ status: false }));
    }
};