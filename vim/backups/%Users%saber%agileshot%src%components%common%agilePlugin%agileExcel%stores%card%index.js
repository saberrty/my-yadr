Vim�UnDo� ��|�w�LMul/�¯F?!;���	nP]��   1                                   \��    _�                            ����                                                                                                                                                                                                                                                                                                                                                             \���     �               1   Limport { observable, extendObservable, action, computed, toJS } from "mobx";   1import { setter, toggle } from "mobx-decorators";        export default class CardStore {   &    constructor({ excelStore } = {}) {   %        this.excelStore = excelStore;       }           @setter       @observable       width = 0;           @setter       @observable       height = 0;           @setter       @observable       columnCount = 0;       "    @observable columnWidth = 110;       #    @observable columnHeight = 124;            @observable gutterSize = 10;           @computed       get datas() {   >        const { groupKey, dataGroups = [] } = this.excelStore;           if (!!groupKey) {   9            return dataGroups.reduce((prev, current) => {   /                prev.push(...current.children);                   return prev;               }, []);           } else {               return dataGroups;   	        }       }           @computed       get totalCount() {   !        return this.datas.length;       }           @computed       get visibleColumns() {   '        return this.excelStore.columns;       }   }5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             \��    �               1   Limport { observable, extendObservable, action, computed, toJS } from "mobx";   1import { setter, toggle } from "mobx-decorators";        export default class CardStore {   &    constructor({ excelStore } = {}) {   %        this.excelStore = excelStore;       }           @setter       @observable       width = 0;           @setter       @observable       height = 0;           @setter       @observable       columnCount = 0;       "    @observable columnWidth = 110;       #    @observable columnHeight = 124;            @observable gutterSize = 10;           @computed       get datas() {   >        const { groupKey, dataGroups = [] } = this.excelStore;           if (!!groupKey) {   9            return dataGroups.reduce((prev, current) => {   /                prev.push(...current.children);                   return prev;               }, []);           } else {               return dataGroups;   	        }       }           @computed       get totalCount() {   !        return this.datas.length;       }           @computed       get visibleColumns() {   '        return this.excelStore.columns;       }   }5��