import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ElModule } from '../../../src/index'
import { ExFooterNavComponent, ExDemoComponent, ExDocumentComponent } from './components'
import { ElDynamicDirective } from './directives'
import { HighLightPipe } from './pipe'

@NgModule({
  declarations: [
    ElDynamicDirective,
    ExFooterNavComponent,
    ExDemoComponent,
    ExDocumentComponent,
    HighLightPipe,
  ],
  exports: [
    ElDynamicDirective,
    ExFooterNavComponent,
    ExDocumentComponent,
    HighLightPipe,
    ExDemoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ElModule,
  ],
  entryComponents: [ExFooterNavComponent],
})
export class ExSharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ExSharedModule, providers: [] }
  }
}
