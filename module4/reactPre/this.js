console.log(this); // empty in node window in browser

function a(){
    console.log(this);
}

// a() // function invocation

let obj = {
    name: "Dkkkkkkk",
    def:function(){
        console.log(this);
    },
    test: function(){
        this.def();
    },
    def2 : function(){
        function klm(){
            console.log(this);
        }
        klm();
    }
}

obj.def(); // method invocation
let dd = obj.def; 
dd(); // function invocation

// obj.test(); // method invocation (inner)
// let dd2 = obj.test;
// dd2(); // function invocation

// obj.def2(); // function invocation who is printing (inner)
// let dd3 = obj.def2;
// dd3(); // function invocation who is printing (inner)