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

    private _draggable: boolean;
    private _mapEntry: MapEntry;
    private _entries: MapEntry[] = [];

    get mapEntry(): MapEntry {
        return this._mapEntry;
    }

    set mapEntry(value: MapEntry) {
        this._mapEntry = value;
    }

    get entries(): MapEntry[] {
        return this._entries;
    }

    set entries(value: MapEntry[]) {
        this._entries = value;
    }

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

    public fromJson(modelFormField) {
        super.fromJson(modelFormField);
        this._options = {
            center: {lat: 47.377847, lng: 8.539834},
            zoom: 12
        };
        const marker = new MapEntry();
        marker.lat = 47.377847;
        marker.lng = 8.539834;
        marker.title = "Zürich HB";
        marker.dragable = false;
        this._entries.push(marker);
        this.overlays = [
            new google.maps.Marker({position: {lat: marker.lat, lng: marker.lng}, title: marker.title, draggable: marker.dragable}),
        ];
        this.value = this._entries;
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
        const marker = new MapEntry();
        marker.lat = this.selectedPosition.lat();
        marker.lng = this.selectedPosition.lng();
        marker.title = this.markerTitle;
        if (this._draggable) {
            marker.dragable = this.draggable;
        } else {
            marker.dragable = false;
        }
        this._entries.push(marker);
        this.value = this._entries;
        this.overlays.push(new google.maps.Marker({position: {lat: marker.lat, lng: marker.lng}, title: marker.title, draggable: marker.dragable}));
        this.markerTitle = null;
        this.dialogVisible = false;
    }
}

export class MapEntry {
    private _lat: number;
    private _lng: number;
    private _title: string;
    private _dragable: boolean;

    get lat(): number {
        return this._lat;
    }

    set lat(value: number) {
        this._lat = value;
    }

    get lng(): number {
        return this._lng;
    }

    set lng(value: number) {
        this._lng = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get dragable(): boolean {
        return this._dragable;
    }

    set dragable(value: boolean) {
        this._dragable = value;
    }
}
