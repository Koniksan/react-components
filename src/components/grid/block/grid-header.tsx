import * as React from 'react';
import { GridHeaderRow, GridHeaderRowProps } from './grid-header-row';
import { GridHeader as GridHeaderBase, GridHeaderProps } from '../grid-header';

export class GridHeader<P extends GridHeaderProps = GridHeaderProps, S = {}> extends GridHeaderBase<P, S> {
    public render(): JSX.Element {
        const attributes = this.getAttributes();

        return (
            <div {...attributes}>
                {this.renderRows()}
            </div>
        );
    }

    protected get rowType(): { new (props: GridHeaderRowProps): GridHeaderRow } {
        return GridHeaderRow;
    }
}

export * from '../grid-header';