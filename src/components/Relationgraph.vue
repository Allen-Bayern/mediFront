<template>
    <div id="relation-graph" class="container"></div>
</template>

<static-query>

</static-query>

<script>
    // 使用官方示例“关系图”执行本次查询
    import {
        TitleComponent,
        TooltipComponent
    } from 'echarts/components';
    import {
        GraphChart
    } from 'echarts/charts';
    import {
        CanvasRenderer
    } from 'echarts/renderers';

    echarts.use(
        [TitleComponent, TooltipComponent, GraphChart, CanvasRenderer]
    );

    export default{
        name : "relation-graph",
        props : {
            items : { type : Array }
        },
        mounted (){
            // get data
            let values = []
            this.items.forEach( el =>{
                values.push(el.value)
            })

            // Initialize the graph
            var chartDom = document.getElementById('relation-graph');
            var myChart = echarts.init(chartDom);

            var option = {
                title : { text : `您可能还想找：` },
                tooltip : {},
                animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
                series : []
            };

            option && myChart.setOption(option);
        }
    }
</script>