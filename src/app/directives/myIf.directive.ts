import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
selector:'[myIf]'
})
export class myIf{
constructor(private tempRef:TemplateRef<any>,private vcR:ViewContainerRef){}
@Input() set myIf(condition : boolean) {
  if(condition){
  this.vcR.createEmbeddedView(this.tempRef);
  }else {
  this.vcR.clear()
  }
}
}
