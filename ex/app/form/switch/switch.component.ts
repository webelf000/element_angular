import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExSwitchComponent implements OnInit {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Cascader 级联选择器', link: '/form/cascader' },
    next: { name: 'Rate 评分', link: '/form/rate' },
  }
  
  ngOnInit(): void {
  }
}
