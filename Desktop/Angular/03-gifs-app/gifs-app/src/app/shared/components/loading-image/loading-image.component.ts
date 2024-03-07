import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-loading-image',
  templateUrl: './loading-image.component.html',

})
export class LoadingImageComponent implements OnInit{


  @Input()
  public url!: string;


  @Input()
  public alt: string = '';

    ngOnInit(): void {
      // if(this.url) throw new Error ('URL property is required');
    }

  onLoad(){
    setTimeout(()=> {
      this.hasLoaded = true;
    }, 1000);
    
  }

  public hasLoaded: boolean = false;


}
