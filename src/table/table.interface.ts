import { TemplateRef } from '@angular/core'

export interface TableSelectEvent {
  selection: any,
  row?: number,
}

export interface TableChangeEvent {
  row?: number,
  column?: number,
  cell?: number,
  event:Event,
}

export interface FilterChangeEvent {
  key: number | string,
  value: any[],
}

export interface RowChangeEvent {
  currentVlue: number,
  lastValue: number,
}

export type changes = {
  currentVlue: number,
  lastValue: number,
}

export interface TableDragendEvent {
  width: changes,
  column: number,
  event: Event,
}

export interface expandEvent {
  row: number,
  expanded: any,
}

export interface TableColumn {
  modelKey: string,
  label: string,
  width: number,
  index: number,
  slot?: TemplateRef<any>,
  slotClick?: Function,
}

export type TableColumnDataItem = {
  value: string | number,
  index: number,
}



