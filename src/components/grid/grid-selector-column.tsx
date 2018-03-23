import * as React from 'react';
import { GridColumn, GridColumnProps } from './grid-column';
import { GridBodyCell } from './grid-body-cell';
import { GridHeaderCell } from './grid-header-cell';
import { GridSelectionMode } from '../../index';

export class GridSelectorColumn<P extends GridColumnProps = GridColumnProps> extends GridColumn<P> {
    public static defaultProps: Partial<GridColumnProps> = {
        body: {
            template: (item: any, column: GridSelectorColumn<GridColumnProps>, cell: GridBodyCell) => column.renderBodyContent(item, cell)
        },
        header: {
            template: (column: GridSelectorColumn<GridColumnProps>, cell: GridHeaderCell) => column.renderHeaderContent(cell)
        },
        isSortable: false,
        title: ''
    };

    protected renderHeaderContent(cell: GridHeaderCell): JSX.Element | JSX.Element[] | string {
        const grid = cell.context.grid;
        const isAllItemsSelected = grid.selector.isAllItemsSelected();

        return (grid.props.selectionMode == GridSelectionMode.Multiple)
            ? <input checked={isAllItemsSelected} onClick={() => grid.selector.selectOrUnselectAll()} type="checkbox" />
            : null;
    }

    protected renderBodyContent(item: any, cell: GridBodyCell): JSX.Element | JSX.Element[] | string {
        return <input checked={cell.props.rowProps.isSelected} type="checkbox" />;
    }
}