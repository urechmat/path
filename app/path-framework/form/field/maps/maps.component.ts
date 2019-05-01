import {Component, Input, Output} from "@angular/core";
import {ValueField} from "../value-field";
import {MessageService} from "primeng/components/common/messageservice";
import {Message} from "primeng/api";
declare var google: any;

@Component({
    selector: "path-maps",
    templateUrl: "maps.component.html",
    providers: [MessageService]
})
export class MapsComponent {
    @Input("field")
    @Output("field")
    field: Maps;
}

export class Maps extends ValueField<any> {
    private _options: any;
    private _overlays: any[];

    private _dialogVisible: boolean;
    private _markerTitle: string;

    private _selectedPosition: any;

    private _draggable: boolean;
    private _mapEntry: MapEntry;

    private _message: Message[] = [];
    private _titleUnique: boolean;

    get titleUnique(): boolean {
        return this._titleUnique;
    }

    set titleUnique(value: boolean) {
        this._titleUnique = value;
    }

    get message(): Message[] {
        return this._message;
    }

    set message(value: Message[]) {
        this._message = value;
    }

    get mapEntry(): MapEntry {
        return this._mapEntry;
    }

    set mapEntry(value: MapEntry) {
        this._mapEntry = value;
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
        this.value = [];
        if (modelFormField["marker"] != null) {
            for (const entryModel of modelFormField["marker"]) {
                const entry = new MapEntry();
                entry.lat = entryModel.latitude;
                entry.lng = entryModel.longitude;
                entry.title = entryModel.title;
                entry.draggable = entryModel.draggable;
                this.value.push(entry);
                this.overlays = [
                    new google.maps.Marker({position: {lat: entry.lat, lng: entry.lng}, title: entry.title, draggable: entry.draggable}),
                ];
            }
            this._options = {
                center: {lat: this.value[0].lat, lng: this.value[0].lng},
                zoom: 12
            };
        } else {
            this._options = {
                center: {lat: 47.377847, lng: 8.539834},
                zoom: 12
            };
            this._overlays = [];
        }
    }

    zoomIn(map) {
        map.setZoom(map.getZoom() + 1);
    }

    zoomOut(map) {
        map.setZoom(map.getZoom() - 1);
    }

    clear() {
        this._overlays = [];
        this.value = [];
    }

    handleMapClick(event) {
        this.dialogVisible = true;
        this.selectedPosition = event.latLng;
    }

    handleDragEnd(event) {
        console.log("Hier------------------ HandleDragEnd");
        console.log(event.overlay.title);
        console.log(event.overlay.internalPosition.lat());
        console.log(event.overlay.internalPosition.lng());
        const objIndex = this.value.findIndex((obj => obj.title === event.overlay.title));
        console.log(this.value[objIndex]);
        this.value[objIndex].lat = event.overlay.internalPosition.lat();
        this.value[objIndex].lng = event.overlay.internalPosition.lng();
    }
    addMarker() {
        this.titleUnique = true;
        for (const entry of this.value)  {
            if (entry.title === this.markerTitle) {
                this._titleUnique = false;
            }
        }
        if (this.titleUnique) {
            console.log(this.titleUnique);
            const marker = new MapEntry();
            marker.lat = this.selectedPosition.lat();
            marker.lng = this.selectedPosition.lng();
            marker.title = this.markerTitle;
            marker.draggable = this.draggable;
            this.value.push(marker);
            const a = new google.maps.Marker({
                position: {lat: marker.lat, lng: marker.lng}, title: marker.title, draggable: marker.draggable});
            this.overlays.push(a);
            this.markerTitle = null;
            this.dialogVisible = false;
        } else {
            this._message = [];
            this._message.push({severity: "error", summary: "Error: ", detail: "Title must be unique"});
            console.log("huhu");
        }
    }
}

export class MapEntry {
    private _lat: number;
    private _lng: number;
    private _title: string;
    private _draggable: boolean;

    get draggable(): boolean {
        return this._draggable;
    }

    set draggable(value: boolean) {
        this._draggable = value;
    }

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
}
