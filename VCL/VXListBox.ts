import VXC = require("VCL/VXComponent");
import VXO = require("VCL/VXObject");
import VXU = require("VCL/VXUtils");
import VXM = require("VCL/VXMenu");
import V = require("VCL/VCL");

export class VXListbox extends VXC.VXComponent {

    public items = new VXO.VXCollection<VXListboxItem>()
    public createItem(value: string, text?: string): VXListboxItem {
        var col: VXListboxItem = new VXListboxItem();
        this.items.add(col);

        col.Value = value;
        col.Text = text;
        return col;
    }


    public onChanged: (sender: VXListbox) => void;
    private jListBox: JQuery;
    public create() {
        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('control-group');

        this.jListBox = $("<select>");
        this.jListBox.css('padding-left', '0px');
        this.jListBox.css('padding-right', '0px');
        this.jListBox.css('margin-bottom', '0px');
        this.jListBox.css('width', '100%');
        this.jListBox.attr('multiple', 'multiple');
        this.items.forEach((item: VXListboxItem) => {
            var itm: JQuery = $('<option/>');
            if (!item.Enabled) itm.attr('disabled', "disabled");
            itm.val(item.ID);

            if (item.Text != null && item.Text.toString().length > 0) itm.text(item.Text);
            else itm.text(item.Value.toString());
            itm.appendTo(this.jListBox);
            return true;
        });
        this.jListBox.appendTo(this.jComponent);

        super.create();
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return; super.draw(reCreate);
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;

    }
}

export class VXListboxItem extends VXM.VXMenuItem {
    constructor() {
        super();
    }
    private _value: string;
    public get Value(): string {
        return this._value;
    }
    public set Value(val: string) {
        if (val != this._value) {
            this._value = val;
        }
    }
}

export class VXTreeNodeItem extends VXM.VXMenuItem {
    constructor() {
        super();
    }

    public onClicked: (item: V.TTreeNodeItem) => void;


    private showChilds(): number {
        var childCnt = 0;
        this.OwnerCollection.forEach((item: VXTreeNodeItem) => {
            if (item.ParentNode != this || !item.jItemLI) return true;

            item.jItemLI.show('fast');
            childCnt++;
        });
        return childCnt;
    }


    private hideChilds(): number {
        var childCnt = 0;
        this.OwnerCollection.forEach((item: VXTreeNodeItem) => {
            if (item.ParentNode != this || !item.jItemLI) return true;

            item.jItemLI.hide('fast');
            childCnt++;
        });
        return childCnt;
    }
    private select(select: boolean) {
        if (select) this.jItemSPAN.removeClass('label-outline').addClass('label-inverse');
        else this.jItemSPAN.addClass('label-outline').removeClass('label-inverse');
    }


    public create(): void {
        var _self: VXTreeNodeItem = this;
        if (this.OwnerCollection.locked) return;
        var childCnt = 0;
        if (!this.jItemLI) {
            this.jItemLI = $('<li/>');
            this.jItemSPAN = $('<span/>').addClass('label');
            this.jItemLI.append(this.jItemSPAN);

            this.jItemI = $('<i>')
            this.jItemI.appendTo(this.jItemSPAN);

            this.jItemTEXT = $('<div/>').css('display', 'inline-block').css('cursor', 'pointer');
            this.jItemTEXT.appendTo(this.jItemSPAN);

            this.jItemSPAN.on('click', function (e) {
                _self.Expanded = !_self.Expanded;

                if (_self.Expanded) childCnt = _self.showChilds();
                else childCnt = _self.hideChilds();
                if (childCnt) {
                    if (_self.Expanded) _self.jItemI.addClass('icon-plus-sign').removeClass('icon-minus-sign');
                    else _self.jItemI.addClass('icon-minus-sign').removeClass('icon-plus-sign');
                }
                if (_self.tree.SelectedNode) _self.tree.SelectedNode.select(false);
                _self.tree.SelectedNode = _self;
                _self.tree.SelectedNode.select(true);
                if (_self.onClicked != null) (V.tryAndCatch(() => { _self.onClicked(_self); }));

                e.stopPropagation();
            });
        }
        this.jItemTEXT.val(this.ID);
        if (this.Text != null && this.Text.toString().length > 0) this.jItemTEXT.text(this.Text);
        else this.jItemTEXT.text(this.Value.toString());

        if (this.Expanded) childCnt = this.showChilds();
        else childCnt = this.hideChilds();
        if (childCnt) {
            if (!this.Expanded) this.jItemI.addClass('icon-plus-sign').removeClass('icon-minus-sign');
            else this.jItemI.addClass('icon-minus-sign').removeClass('icon-plus-sign');
        }
        this.jItemI.css('padding-right', this.jItemI.attr('class') ? '5px' : '0px');
        this.select(this == this.tree.SelectedNode);
    }

    private _expanded: boolean = true;
    public get Expanded(): boolean {
        return this._expanded;
    }
    public set Expanded(val: boolean) {
        if (val != this._expanded) {
            this._expanded = val;
        }
    }

    private _selectable: boolean = true;
    public get Selectable(): boolean {
        return this._selectable;
    }
    public set Selectable(val: boolean) {
        if (val != this._selectable) {
            this._selectable = val;
        }
    }


    private parentNode: VXTreeNodeItem;
    public get ParentNode(): VXTreeNodeItem {
        return this.parentNode;
    }
    public set ParentNode(val: VXTreeNodeItem) {
        if (val != this.parentNode) {
            this.parentNode = val;
        }
    }


    private _value: string;
    public get Value(): string {
        return this._value;
    }
    public set Value(val: string) {
        if (val != this._value) {
            this._value = val;
        }
    }

    private jItemLI: JQuery;
    private jItemUL: JQuery;
    private jItemI: JQuery;
    private jItemSPAN: JQuery;
    private jItemTEXT: JQuery;
    private tree: VXTree;

}


export class VXTree extends VXC.VXComponent {
    public items = new VXO.VXCollection<VXTreeNodeItem>();
    public createNode(parentNode: VXTreeNodeItem, value: string, text?: string): V.TTreeNodeItem {
        var col: VXTreeNodeItem = new VXTreeNodeItem();
        this.items.add(col);

        col.Value = value;
        (<any>col).tree = this;
        col.ParentNode = parentNode;
        col.Text = text;
        return col;
    }


    private _selectednNode: VXTreeNodeItem = null;
    public get SelectedNode(): VXTreeNodeItem {
        return this._selectednNode;
    }
    public set SelectedNode(val: VXTreeNodeItem) {
        if (val != this._selectednNode) {
            var oldNode = this._selectednNode;
            this._selectednNode = val;
            if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(this); }));
            if (oldNode) oldNode.create();
            if (this._selectednNode) this._selectednNode.create();
        }
    }

    public onChanged: (sender: VXTree) => void;

    public collapseAll() {
        this.items.forEach((item: VXTreeNodeItem) => {
            item.Expanded = false;
        });
        this.draw(false);
    }

    public expandAll() {
        this.items.forEach((item: VXTreeNodeItem) => {
            item.Expanded = true;
        });
        this.draw(false);
    }


    private createChilds(prnt: VXTreeNodeItem): number {
        var cnt = 0;
        this.items.forEach((item: VXTreeNodeItem) => {
            if (item.ParentNode != prnt) return true;
            item.create();
            if (!(<any>prnt).jItemUL) {
                (<any>prnt).jItemUL = $('<ul/>');
                (<any>prnt).jItemLI.append((<any>prnt).jItemUL);
            }
            (<any>item).jItemLI.appendTo((<any>prnt).jItemUL);
            this.createChilds(item);
            cnt++;
        });
        if (cnt > 0) {
            (<any>prnt).jItemLI.addClass('parent_li');
        }


        return cnt;
    }

    public create() {
        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('control-group').css('overflow-x', 'hidden').css('overflow-y', 'auto');

        this.jComponent.addClass('tree');
        //create all parents
        this.items.forEach((item: VXTreeNodeItem) => {
            if (item.ParentNode) return true;
            item.create();
            this.createChilds(item);
            var jObj = $('<ul/>').addClass('parent_ul').append((<any>item).jItemLI);
            this.jComponent.append(jObj);
        });

        super.create();
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return; super.draw(reCreate);
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;
        this.items.forEach((item: VXTreeNodeItem) => {
            item.create();
        });

    }
}