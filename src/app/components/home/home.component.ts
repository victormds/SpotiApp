import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {



  constructor() {

   /*
   paises: any [] = [];

    inyectar constructor

    private http: HttpClient

    console.log("Constructor del home llamado");
    this.http.get("https://restcountries.eu/rest/v2/lang/es")
      .subscribe((resp: any) => {

        this.paises = resp;
        console.log(resp);

      });

      */
  }

  ngOnInit() {}
}


