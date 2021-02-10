import { Component, OnInit, ViewChild } from '@angular/core';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';


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

  image = "";
  show = false;

  constructor() {
    this.socket$ = new WebSocketSubject('ws://192.168.8.138:1337');

    this.socket$
      .subscribe(
        (message: any) => {

          // console.log(`messge received ${JSON.stringify(message)}`)


          this.image = `data:image/JPEG;base64,${message.msg.img}`
          // console.log(this.image)
          this.show = true;
        },
        (err) => console.error(err),
        () => console.warn('Completed!')
      );
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
          data: [15, 50, 35]
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
        categories: ["Plastic", "Organic", "Other"]
      },
      yaxis: {
        title: {
          text: "Percentage"
        },

      },


    };

  }

}
