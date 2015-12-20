/* global __dirname */
/**
 * Created by iamchenxin on 12/17/15.
 */
import {MongoClient,ObjectID} from "mongodb";
import * as assert from "assert";

function log(txt){
    console.log(txt);
}

function ts1(){
    var url = `mongodb://localhost:27017/mytest`;

    let mc = MongoClient;
    mc.connect(url,(err,db)=>{
       assert.equal(null,err);
        log("connected to server ..");

        let cursor = db.collection('book').find();

        cursor.each((err,doc)=>{
           log(doc);
            assert.equal(err, null);
            if (doc != null) {
                console.dir(doc);
            } else {
                db.close();
            }
        });



    });
}

export function dets(){
    log("1");
    log("2");
    log("# "+__dirname);
    
    log(" vscode push");
    let array=[1,2,3];
    for (var i = 0; i < array.length; i++) {
        let element = array[i];
        log(` v = ${element}`);
    }

}

dets();

