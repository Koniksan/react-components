import * as React from 'react';
import { GridHeaderCell as GridHeaderCellBase, GridHeaderCellProps } from '../grid-header-cell';

export class GridHeaderCell<P extends GridHeaderCellProps = GridHeaderCellProps, S = any>  extends GridHeaderCellBase<P, S> {
    public render(): JSX.Element {
        const className = this.style.className;

        return (
            <div className={className}>
                {this.renderTitle()}
            </div>
        );
    }
}