import * as path from './../../path-framework/path';
import {FormField} from "../../path-framework/form/field/form-field";
import {AutoCompleteField} from "../../path-framework/form/field/auto-complete/auto-complete-field.component";
import {RadioGroupField} from "../../path-framework/form/field/radio/radio-group.component";
import {ProgressBarField} from "../../path-framework/form/field/progress-bar/progress-bar.component";
import {TextField} from "../../path-framework/form/field/text/text-field.component";
import {OkButton} from "../../path-framework/form/field/button/ok-button";
import {CancelButton} from "../../path-framework/form/field/button/cancel-button";
import {ValueField} from "../../path-framework/form/field/value-field";

// TODO in future versions these classes will be generated from gui model

export class ProjectForm implements path.IFormBean {

    private _project:path.FormField;
    private _caseKey:path.AutoCompleteField;
    private _startDate:path.FormField;
    private _endDate:path.FormField;
    private _customerKey:path.AutoCompleteField;
    private _serviceProviderKey:path.AutoCompleteField;
    private _customerProjectLeaderKey:path.AutoCompleteField;
    private _serviceProviderProjectLeaderKey:path.AutoCompleteField;
    private _industrySegment:path.AutoCompleteField;
    private _benchmarking:path.RadioGroupField;
    private _monitoring:path.RadioGroupField;
    private _comment:path.FormField;

    get project():FormField {
        return this._project;
    }

    set project(value:FormField) {
        this._project = value;
    }

    get caseKey():AutoCompleteField {
        return this._caseKey;
    }

    set caseKey(value:AutoCompleteField) {
        this._caseKey = value;
    }

    get startDate():FormField {
        return this._startDate;
    }

    set startDate(value:FormField) {
        this._startDate = value;
    }

    get endDate():FormField {
        return this._endDate;
    }

    set endDate(value:FormField) {
        this._endDate = value;
    }

    get customerKey():AutoCompleteField {
        return this._customerKey;
    }

    set customerKey(value:AutoCompleteField) {
        this._customerKey = value;
    }

    get serviceProviderKey():AutoCompleteField {
        return this._serviceProviderKey;
    }

    set serviceProviderKey(value:AutoCompleteField) {
        this._serviceProviderKey = value;
    }

    get customerProjectLeaderKey():AutoCompleteField {
        return this._customerProjectLeaderKey;
    }

    set customerProjectLeaderKey(value:AutoCompleteField) {
        this._customerProjectLeaderKey = value;
    }

    get serviceProviderProjectLeaderKey():AutoCompleteField {
        return this._serviceProviderProjectLeaderKey;
    }

    set serviceProviderProjectLeaderKey(value:AutoCompleteField) {
        this._serviceProviderProjectLeaderKey = value;
    }

    get industrySegment():AutoCompleteField {
        return this._industrySegment;
    }

    set industrySegment(value:AutoCompleteField) {
        this._industrySegment = value;
    }

    get benchmarking():RadioGroupField {
        return this._benchmarking;
    }

    set benchmarking(value:RadioGroupField) {
        this._benchmarking = value;
    }

    get monitoring():RadioGroupField {
        return this._monitoring;
    }

    set monitoring(value:RadioGroupField) {
        this._monitoring = value;
    }

    get comment():FormField {
        return this._comment;
    }

    set comment(value:FormField) {
        this._comment = value;
    }
}

export class QuestionForm implements path.IFormBean {
    private _questionActual:path.RadioGroupField;
    private _questionTarget:path.RadioGroupField;
    private _answer1:path.ValueField<string>;
    private _answer2:path.ValueField<string>;
    private _answer3:path.ValueField<string>;
    private _answer4:path.ValueField<string>;
    private _answer5:path.ValueField<string>;
    private _progress:path.ProgressBarField;
    private _formula:path.TextField;
    private _input1:path.TextField;
    private _unit1:path.TextField;
    private _input2:path.TextField;
    private _unit2:path.TextField;
    private _comment:path.TextField;
    private _deleteButton:path.FormField;
    private _okButton:path.OkButton;
    private _cancelButton:path.CancelButton;

    get questionActual():RadioGroupField {
        return this._questionActual;
    }

    set questionActual(value:RadioGroupField) {
        this._questionActual = value;
    }

    get questionTarget():RadioGroupField {
        return this._questionTarget;
    }

    set questionTarget(value:RadioGroupField) {
        this._questionTarget = value;
    }

    get answer1():ValueField<string> {
        return this._answer1;
    }

    set answer1(value:ValueField<string>) {
        this._answer1 = value;
    }

    get answer2():ValueField<string> {
        return this._answer2;
    }

    set answer2(value:ValueField<string>) {
        this._answer2 = value;
    }

    get answer3():ValueField<string> {
        return this._answer3;
    }

    set answer3(value:ValueField<string>) {
        this._answer3 = value;
    }

    get answer4():ValueField<string> {
        return this._answer4;
    }

    set answer4(value:ValueField<string>) {
        this._answer4 = value;
    }

    get answer5():ValueField<string> {
        return this._answer5;
    }

    set answer5(value:ValueField<string>) {
        this._answer5 = value;
    }

    get progress():ProgressBarField {
        return this._progress;
    }

    set progress(value:ProgressBarField) {
        this._progress = value;
    }

    get formula():TextField {
        return this._formula;
    }

    set formula(value:TextField) {
        this._formula = value;
    }

    get input1():TextField {
        return this._input1;
    }

    set input1(value:TextField) {
        this._input1 = value;
    }

    get unit1():TextField {
        return this._unit1;
    }

    set unit1(value:TextField) {
        this._unit1 = value;
    }

    get input2():TextField {
        return this._input2;
    }

    set input2(value:TextField) {
        this._input2 = value;
    }

    get unit2():TextField {
        return this._unit2;
    }

    set unit2(value:TextField) {
        this._unit2 = value;
    }

    get comment():TextField {
        return this._comment;
    }

    set comment(value:TextField) {
        this._comment = value;
    }

    get deleteButton():FormField {
        return this._deleteButton;
    }

    set deleteButton(value:FormField) {
        this._deleteButton = value;
    }

    get okButton():OkButton {
        return this._okButton;
    }

    set okButton(value:OkButton) {
        this._okButton = value;
    }

    get cancelButton():CancelButton {
        return this._cancelButton;
    }

    set cancelButton(value:CancelButton) {
        this._cancelButton = value;
    }
}

export class CompanyForm implements path.IFormBean {

    private _companyName:path.TextField;
    private _street:path.TextField;
    private _postalCode:path.TextField;
    private _city:path.TextField;
    private _comments:path.TextField;

    get companyName():path.TextField {
        return this._companyName;
    }

    set companyName(value:path.TextField) {
        this._companyName = value;
    }

    get street():path.TextField {
        return this._street;
    }

    set street(value:path.TextField) {
        this._street = value;
    }

    get postalCode():path.TextField {
        return this._postalCode;
    }

    set postalCode(value:path.TextField) {
        this._postalCode = value;
    }

    get city():path.TextField {
        return this._city;
    }

    set city(value:path.TextField) {
        this._city = value;
    }

    get comments():path.TextField {
        return this._comments;
    }

    set comments(value:path.TextField) {
        this._comments = value;
    }
}