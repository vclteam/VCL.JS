import V = require("VCL/VCL");
import VC = require("VCL/VXComponent");
import VXO = require("VCL/VXObject");
import VXCB = require("VCL/VXChartBase");
import VXU = require("VCL/VXUtils");


declare var RGraph;
export class TGraphBar extends VXCB.TChartBarBase {
    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);

        //this.bar.setData(this.getData());

    }

    public bar: any
    public create() {
        V.Application.loadJSLibraries(["VCL/Scripts/RGraph/RGraph.common.core", "VCL/Scripts/RGraph/RGraph.bar"], () => {
            this.jComponent.empty(); //clear all subcomponents
            this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'canvas', this.FitToWidth, this.FitToHeight);
            var dt = [];
            var lb = [];
            this.values.forEach((valueOfElement: VXCB.TBarValue) => {
                dt.push(valueOfElement.Value1);
                lb.push(valueOfElement.Label);
            });
            this.bar = new RGraph.Bar(this.jComponent[0], dt);
            this.bar.set('labels', lb);
            this.bar.set('title', "title");
            this.bar.set('background.grid', false);
            
            this.bar.draw();

            /*var yaxis = new RGraph.Drawing.YAxis(this.jComponent[0], line.gutterLeft)
                .set('title', 'Widgets sold')
                .set('colors', ['black'])
                .draw();
            super.create();*/
        })
    }
}

