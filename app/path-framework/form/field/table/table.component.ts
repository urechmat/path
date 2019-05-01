import {Component, Input, Output} from "@angular/core";
import {ValueField} from "../value-field";
import {MessageService} from "primeng/components/common/messageservice";
declare var google: any;

@Component({
    selector: "path-table",
    templateUrl: "table.component.html",
    providers: [MessageService]
})
export class TableComponent {
    @Input("field")
    @Output("field")
    field: Table;
}

export class Table extends ValueField<any> {
    private _options: any;
    private _overlays: any[];

    private _dialogVisible: boolean;
    private _markerTitle: string;

    private _selectedPosition: any;

    private _infoWindow: any;

    private _draggable: boolean;

    private _messageService: MessageService;

    get markerTitle(): string {
        return this._markerTitle;
    }

    set markerTitle(value: string) {
        this._markerTitle = value;
    }

    get selectedPosition(): any {
        return this._selectedPosition;
    }

    set selectedPosition(value: any) {
        this._selectedPosition = value;
    }

    get infoWindow(): any {
        return this._infoWindow;
    }

    get draggable(): boolean {
        return this._draggable;
    }

    set draggable(value: boolean) {
        this._draggable = value;
    }

    get dialogVisible(): boolean {
        return this._dialogVisible;
    }

    set dialogVisible(value: boolean) {
        this._dialogVisible = value;
    }

    get overlays(): any[] {
        return this._overlays;
    }

    set overlays(value: any[]) {
        this._overlays = value;
    }

    get options(): any {
        return this._options;
    }

    set options(value: any) {
        this._options = value;
    }

    public fromJson(modelFormField) {
        super.fromJson(modelFormField);
        this._options = {
            center: {lat: 47.377847, lng: 8.539834},
            zoom: 12
        };
        this.overlays = [
            new google.maps.Marker({position: {lat: 47.377847, lng: 8.539834}, title:"Zürich HB"}),
        ];
    }

    zoomIn(map) {
        map.setZoom(map.getZoom() + 1);
    }

    zoomOut(map) {
        map.setZoom(map.getZoom() - 1);
    }

    clear() {
        this._overlays = [];
    }

    handleMapClick(event) {
        this.dialogVisible = true;
        this.selectedPosition = event.latLng;
    }

    addMarker() {
        this.overlays.push(new google.maps.Marker({position: {lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng()}, title: this.markerTitle, draggable: this.draggable}));
        this.markerTitle = null;
        this.dialogVisible = false;
    }
}
