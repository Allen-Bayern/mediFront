<template>
    <div id="tree-graph" class="container" style = "width: 800px;height: 500px;"></div>
</template>

<script>
// 使用官方示例“树图”执行本次查询
import * as echarts from 'echarts';

export default{
    name : "relation-graph",
    props : {
        items : { type : Object },
    },
    mounted (){
        // Initialize the graph
        var chartDom = document.getElementById('tree-graph');
        var myChart = echarts.init(chartDom);

        var data = this.items;

        var option = {
            tooltip : {
                trigger : `item`,
                triggerOn : `mousemove`
            },
            series : [
                {
                    type : `tree`,
                    id : 0,
                    name : `tree1`,
                    data : [data],
                    orient : 'TB',

                    top : `10%`,
                    left : `8%`,
                    bottom : `22`,
                    right : `20`,

                    symbolSize: 15,

                    edgeShape: 'polyline',
                    edgeForkPosition: '63%',
                    initialTreeDepth: 3,

                    lineStyle: {
                        width: 2
                    },

                    label: {
                        backgroundColor: '#fff',
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right'
                    },

                    leaves: {
                        label: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'middle'
                        }
                    },

                    emphasis: {
                        focus: 'descendant'
                    },

                    expandAndCollapse: true,
                    animationDuration: 550,
                    animationDurationUpdate: 750
                }
            ]
        }

        option && myChart.setOption(option);
    }
}
</script>