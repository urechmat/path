import {Component, Input, Output} from "@angular/core";
import {ValueField} from "../value-field";
import {MessageService} from "primeng/components/common/messageservice";
import {Message} from "primeng/api";
import {IForm} from "../../../pathinterface";
import {TranslationService} from "../../../service/translation.service";
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
    private _message: Message[] = [];
    private _infoWindow: any;
    private _addNewMarker: boolean;
    private _clearMap: boolean;

    constructor(form: IForm, translationService: TranslationService) {
        super(form, translationService);
        this.value = [];
        this._overlays = [];
        this._infoWindow = new google.maps.InfoWindow();
    }

    public fromJson(modelFormField) {
        super.fromJson(modelFormField);
        this.width = 2;
        this._markerTitle = null;
        this._options = {
            center: {lat: 47.377847, lng: 8.539834},
            zoom: 12
        };
        if (modelFormField["addMarker"] != null) {
            this._addNewMarker = (modelFormField["addMarker"]);
        }
        if (modelFormField["clearMap"] != null) {
            this._clearMap = (modelFormField["clearMap"]);
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
        if (this._addNewMarker) {
            this._dialogVisible = true;
        }
        this._selectedPosition = event.latLng;
    }

    handleOverlayClick(event) {
        const isMarker = event.overlay.getTitle !== undefined;

        if (isMarker) {
            const title = event.overlay.getTitle();
            this._infoWindow.setContent("<p>" + title + "<p>");
            this._infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition());
        }
    }

    addMarker(event) {
        this._message = [];
        if (this._markerTitle !== null) {
            const marker = new MapEntry();
            marker.lat = this._selectedPosition.lat();
            marker.lng = this._selectedPosition.lng();
            marker.title = this._markerTitle;
            this.value.push(marker);
            const a = new google.maps.Marker({
                position: {lat: marker.lat, lng: marker.lng}, title: marker.title});
            this._overlays.push(a);
            this._markerTitle = null;
            this._dialogVisible = false;
        } else {
            this._message.push({severity: "error", summary: "Error: ", detail: "Please enter a title"});
        }
    }

    // Getter & Setter
    get message(): Message[] {
        return this._message;
    }

    set message(value: Message[]) {
        this._message = value;
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

    get dialogVisible(): boolean {
        return this._dialogVisible;
    }

    set dialogVisible(value: boolean) {
        this._dialogVisible = value;
    }

    get overlays(): any[] {
        return this._overlays;
    }

    get options(): any {
        return this._options;
    }

    get clearMap(): boolean {
        return this._clearMap;
    }

    set clearMap(value: boolean) {
        this._clearMap = value;
    }
}

export class MapEntry {
    private _lat: number;
    private _lng: number;
    private _title: string;

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
