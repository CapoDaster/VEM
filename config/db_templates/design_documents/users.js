/**
 * Created by sh on 05/01/15.
 */
var doc = {}

doc.doc_body = {
    "language": "javascript",
    "views": {
        "getUsers": {
            "map": "function(doc) {\n\tif (doc.type=='user'){\n\t\temit(doc.username, doc);\n\t}\n}"
        },
        "checkPass": {
            "map": "function(doc) {if (doc.type=='user'){\n\t\temit(doc.username, [doc.password,doc.userRole]);\n\t}\n}"
        },
        "getById": {
            "map": "function(doc) {if (doc.type =='user'){ \n emit(doc._id, doc);}\n}"
        }
    }
};

doc._id  = "_design/users";

module.exports = doc;