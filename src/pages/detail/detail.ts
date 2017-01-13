import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import { Content, NavController, NavParams } from 'ionic-angular';

declare var document: any;


@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  @ViewChild(Content) content: Content;
  @ViewChild('ionHeader') ionHeader: ElementRef;
  @ViewChild('headerImage') headerImage: ElementRef;
  isImageVistible: boolean = true;
  imageHeight: number;
  opacity: number = 1;
  toolbarBackground: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public renderer: Renderer) { }

  ionViewDidLoad() {
    let header = this.ionHeader.nativeElement;
    this.toolbarBackground = header.getElementsByClassName('toolbar-background')[0];

    this.imageHeight = this.headerImage.nativeElement.offsetHeight - header.offsetHeight;

    this.renderer.setElementStyle(this.toolbarBackground, 'background', 'rgba(239, 101, 48,0)')
    document.querySelector('page-detail .toolbar-background').style.background = 'rgba(239,101,48,0)';
  }

  onScroll(ev) {
    this.opacity = this.content.scrollTop / this.imageHeight;

    this.renderer.setElementStyle(this.toolbarBackground, 'background', 'rgba(239, 101, 48, ' + this.opacity + ')');
  }

}
