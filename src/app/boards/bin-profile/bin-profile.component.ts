import { Component, OnInit, ViewChild } from '@angular/core';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import {ClassificationService} from '../../services/classification/classification.service'
import { stringify } from '@angular/compiler/src/util';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-bin-profile',
  templateUrl: './bin-profile.component.html',
  styleUrls: ['./bin-profile.component.css']
})
export class BinProfileComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  private socket$: WebSocketSubject<Message>
  data: any;

  loading:boolean=false;
  percentageData;

  categoryArr:string[]=[];
  percentageArr:number[]=[];

  image = "";
  show = false;

  constructor(private classificationService:ClassificationService) {
    this.getPercentages();
    // this.socket$ = new WebSocketSubject('ws://192.168.8.138:1337');

    // this.socket$
    //   .subscribe(
    //     (message: any) => {

    //       // console.log(`messge received ${JSON.stringify(message)}`)


    //       this.image = `data:image/JPEG;base64,${message.msg.img}`
    //       // console.log(this.image)
    //       this.show = true;
    //     },
    //     (err) => console.error(err),
    //     () => console.warn('Completed!')
    //   );
  }

  getPercentages(){
    this.loading=true;
    try{
      this.classificationService.getPercentage().subscribe((res:any)=>{
        this.loading=false;
        console.log(res);
        //this.percentageData = res;
        for(var i=0;i<4;i++){
          this.percentageArr[i]=parseFloat(res[i].percentage);
          this.categoryArr[i]=res[i].category;
        }
        console.log(this.percentageArr[0]);
        console.log(this.categoryArr[0]);
      })
    }catch(exception){
      console.log("Recieved Empty List!");
    }
  }


  ngOnInit(): void {

    this.data = {
      latitude: 7.205302,
      longitude: 79.857459
    };



    this.chartOptions = {
      series: [
        {
          name: "Percentage",
          data: [20,this.percentageArr[1],this.percentageArr[2],1]
        }
      ],
      chart: {
        height: 500,
        width: 600,
        type: "bar"
      },
      title: {
        // text: "Garbage Classification",
        align: "center",
        margin: 6
      },
      xaxis: {
        title: {
          text: "Garbage Categories"
        },
        categories: ["","","",""]
      },
      yaxis: {
        title: {
          text: "Percentage"
        },

      },


    };

  }

}
