# Preface

这是医学词典的前端部分，用gridsome来实现。

本分支实现了用Graph QL查询数据。

getChildren(){
            return function(related, relfr){
                let children = [];
                relfr.forEach(  function( value ){
                    {
                        let child = {
                            'name' : value.relachn,
                            'children' : [{ 'name' : value.rightw }]
                        };
                        children.push(child);
                    }
                });
                return {
                    'name' : related,
                    'children' : children
                }
            }
        }