import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExBreadcrumbComponent implements OnInit {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Nav-menu 导航菜单', link: '/nav/menu' },
    next: { name: 'Steps 步骤条', link: '/nav/steps' },
  }
  private exClass: any = class {
    handle(path: string): void {
      console.log(path)
    }
  }
  
  
  ngOnInit(): void {
  }
}
