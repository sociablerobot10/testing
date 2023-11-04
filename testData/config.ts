
let configure = {
    objectID: ''
}

   function setObjectID (value) {
        configure.objectID = value;
    }
    function getObjectID () {
        return configure.objectID;
    }


export { configure, setObjectID, getObjectID}
