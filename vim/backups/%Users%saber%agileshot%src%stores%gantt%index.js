Vim�UnDo� j���2�%�����ѷ�j�a&�>�c�h��s�  n                                  \乏    _�                     ,       ����                                                                                                                                                                                                                                                                                                                                                             \��     �   ,   .  o            �   ,   .  n    5�_�                    -   !    ����                                                                                                                                                                                                                                                                                                                                                             \�     �   ,   .  o      !        console.info(this.groups)5�_�                    -   !    ����                                                                                                                                                                                                                                                                                                                                                             \�    �  n  p          }�  m  o              }�  l  n          	        }�  k  m                          break;�  j  l                      default:�  i  k                          break;�  h  j                          }�  g  i                              });�  f  h          3                        return tIndex > -1 && flag;�  e  g                                  }�  d  f          D                            group && group.deleteTaskAction(tIndex);�  c  e          1                        } else if (tIndex > -1) {�  b  d          ?                            group && group.addTaskAction(task);�  a  c          (                            flag = true;�  `  b          H                        if (laneId.toString() === group.id.toString()) {�  _  a          \                        const tIndex = group.tasks.findIndex(gtask => gtask.id === task.id);�  ^  `          /                    this.groups.find(group => {�  ]  _          %                    let flag = false;�  \  ^          2                if (this.groupBy === "swimlane") {�  [  ]                      case "changeLane":�  Z  \                          break;�  Y  [                          });�  X  Z                              }�  W  Y          $                        return true;�  V  X          @                        group && group.deleteTaskAction(tIndex);�  U  W          &                    if (tIndex > -1) {�  T  V          X                    const tIndex = group.tasks.findIndex(gtask => gtask.id === task.id);�  S  U          +                this.groups.find(group => {�  R  T                      case "deleteTask":�  Q  S                  switch (operation) {�  P  R          .    updateTaskGroup(operation, task, laneId) {�  O  Q              @action�  N  P           �  M  O              }�  L  N                  return true;�  K  M          	        }�  J  L                      return false;�  I  K                  ) {�  H  J          \            postTaskPreRelation.some((relation, index) => relation.preTask.id === preTaskId)�  G  I          "            postTaskPreRelation &&�  F  H                  if (�  E  G          	        }�  D  F                      return false;�  C  E                  ) {�  B  D          [            postTaskPostRelation.some((relation, index) => relation.ref_task === preTaskId)�  A  C          #            postTaskPostRelation &&�  @  B                  if (�  ?  A          	        }�  >  @                      return false;�  =  ?                  ) {�  <  >          \            preTaskPreRelation.some((relation, index) => relation.preTask.id === postTaskId)�  ;  =          !            preTaskPreRelation &&�  :  <                  if (�  9  ;          	        }�  8  :                      return false;�  7  9                  ) {�  6  8          [            preTaskPostRelation.some((relation, index) => relation.ref_task === postTaskId)�  5  7          "            preTaskPostRelation &&�  4  6                  if (�  3  5          	        }�  2  4                      return false;�  1  3          '        if (preTaskId === postTaskId) {�  0  2          B        const postTaskPreRelation = this.preTasks.get(postTaskId);�  /  1          7        const postTaskPostRelation = postTask.position;�  .  0          @        const preTaskPreRelation = this.preTasks.get(preTaskId);�  -  /          5        const preTaskPostRelation = preTask.position;�  ,  .          '        const postTaskId = postTask.id;�  +  -          %        const preTaskId = preTask.id;�  *  ,          7    shouldAddPostLine(prePostType, preTask, postTask) {�  )  +           �  (  *              }�  '  )          ,        preTask.deletePostLine(postTask.id);�  &  (          '    deletePostLine(preTask, postTask) {�  %  '           �  $  &              }�  #  %          	        }�  "  $                      });�  !  #          '                placement: "bottomLeft"�     "          D                ), //"存在依赖冲突，请检查后重新设置"�    !          B                    "transaction.hint.failure.associationConflict"�               6                description: this.currentLanguage.get(�              {                message: this.currentLanguage.get("transaction.hint.failure.association"), //"无法设置此依赖关系",�                           notification.error({�                      } else {�                          }�              `                this.setTaskTimeProperly(postTask, "all", preTaskTime - postTask[postTaskType]);�              7            if (preTaskTime > postTask[postTaskType]) {�              :            preTask.addPostLine(postTask.id, prePostType);�              E        if (this.shouldAddPostLine(prePostType, preTask, postTask)) {�              `            prePostType.lastIndexOf("S") === prePostType.length - 1 ? "start_time" : "end_time";�                      const postTaskType =�              `        const preTaskTime = preTask[prePostType.indexOf("S") === 0 ? "start_time" : "end_time"];�              1    addPostLine(prePostType, preTask, postTask) {�               �                  }�              	        }�                          }�                              }�              5                    originalTaskIds.pop(postTask.id);�              Q                    await this.changePostTasks(postTask, "all", originalTaskIds);�  
            6                    originalTaskIds.push(postTask.id);�  	            ;                    await postTask.setBothTime(difference);�    
          Y                if (difference > 0 && (category === "all" || preTimeType === category)) {�    	           �              D                const difference = task[preTimeType] - postTaskTime;�              <                const postTaskTime = postTask[postTimeType];�              b                    rel_type.lastIndexOf("S") === rel_type.length - 1 ? "start_time" : "end_time";�              $                const postTimeType =�              \                const preTimeType = rel_type.indexOf("S") === 0 ? "start_time" : "end_time";�               �                               }�  �                                break;�  �             Z                if (originalTaskIds && originalTaskIds.find(tid => tid === postTask.id)) {�  �  �          :                const postTask = this.tasks.get(ref_task);�  �  �          8                const { rel_type, ref_task } = relation;�  �  �          2                const relation = task.position[i];�  �  �          <            for (let i = 0; i < task.position.length; i++) {�  �  �                  if (task.position) {�  �  �          <    async changePostTasks(task, category, originalTaskIds) {�  �  �           �  �  �              };�  �  �          
        );�  �  �                      })�  �  �                          );�  �  �          D                    (category === "all" || preTimeType === category)�  �  �          N                    task[preTimeType] + difference > postTask[postTimeType] &&�  �  �                          return (�  �  �           �  �  �          b                    rel_type.lastIndexOf("S") === rel_type.length - 1 ? "start_time" : "end_time";�  �  �          $                const postTimeType =�  �  �          \                const preTimeType = rel_type.indexOf("S") === 0 ? "start_time" : "end_time";�  �  �          :                const postTask = this.tasks.get(ref_task);�  �  �          8                const { rel_type, ref_task } = relation;�  �  �          ,            task.position.find(relation => {�  �  �                      task.position &&�  �  �                  return (�  �  �          6    checkPostTasks = (task, category, difference) => {�  �  �           �  �  �              };�  �  �          
        );�  �  �                      })�  �  �                          );�  �  �          E                    (category === "all" || postTimeType === category)�  �  �          M                    task[postTimeType] + difference < preTask[preTimeType] &&�  �  �                          return (�  �  �           �  �  �          b                    rel_type.lastIndexOf("S") === rel_type.length - 1 ? "start_time" : "end_time";�  �  �          $                const postTimeType =�  �  �          \                const preTimeType = rel_type.indexOf("S") === 0 ? "start_time" : "end_time";�  �  �          3                const { rel_type, preTask } = item;�  �  �          #            preTasks.find(item => {�  �  �                      preTasks &&�  �  �                  return (�  �  �          4        const preTasks = this.preTasks.get(task.id);�  �  �          5    checkPreTasks = (task, category, difference) => {�  �  �           �  �  �              };�  �  �          	        }�  �  �                          break;�  �  �                      default:�  �  �                          break;�  �  �                          );�  �  �                              callback�  �  �          S                    (task.end_time ? task.end_time : task.relateTime) + difference,�  �  �          !                task.setDeadline(�  �  �                      case "end_time":�  �  �                          break;�  �  �                          );�  �  �                              callback�  �  �          W                    (task.start_time ? task.start_time : task.relateTime) + difference,�  �  �          "                task.setStartTime(�  �  �                      case "start_time":�  �  �                          break;�  �  �          7                task.setBothTime(difference, callback);�  �  �                      case "all":�  �  �                  switch (category) {�  �  �          =    setTaskTime = (task, category, difference, callback) => {�  �  �           �  �  �              };�  �  �          	        }�  �  �                      );�  �  �          ?                this.changePostTasks(task, category, [task.id])�  �  �          >            this.setTaskTime(task, category, difference, () =>�  �  �                  } else {�  �  �                      }�  �  �          =                this.setTaskTime(task, category, difference);�  �  �                      } else {�  �  �                          });�  �  �          +                    placement: "bottomLeft"�  �  �          �                    description: this.currentLanguage.get("transaction.hint.timeConflict"), //"所设时间和前置任务冲突，可尝试调整前置任务时间后再试"�  �  �          �                    message: this.currentLanguage.get("transaction.hint.failure.modifyTaskTime"), //"无法设置改任务时间",�  �  �          $                notification.error({�  �  �          %                task.resetTaskTime();�  �  �          A            if (this.checkPreTasks(task, category, difference)) {�  �  �                  if (difference < 0) {�  �  �          ;    setTaskTimeProperly = (task, category, difference) => {�  �  �           �  �  �              };�  �  �          .        return this.taskVisibleLines.get(tid);�  �  �          "    getTaskVisibleLines = tid => {�  �  �           �  �  �              };�  �  �          #        return this.tasks.get(tid);�  �  �              getTask = tid => {�  �  �           �  �  �              };�  �  �          P        return Math.round(width / this.widthPerHourByTimeSpan) * 1000 * 60 * 60;�  �  �          !    getTimeFromWidth = width => {�  �  �           �  �  �              };�  �  �          Q        return this.widthPerHourByTimeSpan * Math.round(time / (1000 * 60 * 60));�  �  �               getWidthFromTime = time => {�  �  �           �  �  �              };�  �  �          A        groupsFinished && (this.groupsFinished = groupsFinished);�  �  �          =        this.setGroupsAction(Array.from(groupList.values()));�  �  �                      });�  �  �                              });�  �  �          D                        groupList.get(groupKey).addTaskAction(task);�  �  �          0                        task.setCollapsed(true);�  �  �                                  }�  �  �                                      );�  �  �          "                                })�  �  �          (                                    lane�  �  �          .                                    tasks: [],�  �  �          4                                    name: groupName,�  �  �          1                                    id: groupKey,�  �  �          5                                    ganttStore: this,�  �  �          @                                    panelStore: this.panelStore,�  �  �          >                                    rootStore: this.rootStore,�  �  �          +                                new Group({�  �  �          )                                groupKey,�  �  �          *                            groupList.set(�  �  �          7                        if (!groupList.has(groupKey)) {�  �  �                                  }�  �  �          1                            groupName = groupKey;�  �  �          :                            groupKey = task[this.groupBy];�  �  �                                   } else {�  �  �          Z                            groupName = task[this.groupBy] && task[this.groupBy].nickname;�    �          Y                            groupKey = task[this.groupBy] && task[this.groupBy].username;�  ~  �                                  ) {�  }            =                            this.groupBy === "superintendent"�  |  ~          9                            this.groupBy === "creator" ||�  {  }          #                        } else if (�  z  |          2                            groupName = lane.name;�  y  {          /                            groupKey = lane.id;�  x  z          :                        if (this.groupBy === "swimlane") {�  w  y          0                    lane.tasks.forEach(task => {�  v  x                          lane.tasks &&�  u  w                          }�  t  v                              );�  s  u                                  })�  r  t                                       lane�  q  s          &                            tasks: [],�  p  r          ,                            name: lane.name,�  o  q          (                            id: lane.id,�  n  p          -                            ganttStore: this,�  m  o          8                            panelStore: this.panelStore,�  l  n          6                            rootStore: this.rootStore,�  k  m          #                        new Group({�  j  l                                   lane.id,�  i  k          "                    groupList.set(�  h  j          M                if (this.groupBy === "swimlane" && !groupList.has(lane.id)) {�  g  i          )            panel.lanes.forEach(lane => {�  f  h                      panel.lanes &&�  e  g                  panel &&�  d  f          /        this.groupBy = groupBy || this.groupBy;�  c  e                  let groupName = "";�  b  d                  let groupKey = "";�  a  c          &        const panel = this.panelStore;�  `  b          $        const groupList = new Map();�  _  a          .    setGroups = (groupBy, groupsFinished) => {�  ^  `           �  ]  _              };�  \  ^          !        this.timeSpan = timeSpan;�  [  ]              setTimeSpan = timeSpan => {�  Z  \              @action�  Y  [           �  X  Z              };�  W  Y                  this.groups = groups;�  V  X          !    setGroupsAction = groups => {�  U  W              @action�  T  V           �  S  U              };�  R  T          #        this.leftWidth = leftWidth;�  Q  S          !    setLeftWidth = leftWidth => {�  P  R              @action�  O  Q           �  N  P              }�  M  O          	        }�  L  N          *                return this.dateListByDay;�  K  M                      default:�  J  L                      case "day":�  I  K          +                return this.dateListByWeek;�  H  J                      case "week":�  G  I          ,                return this.dateListByMonth;�  F  H                      case "month":�  E  G          -                return this.dateListBySeason;�  D  F                      case "season":�  C  E                   switch (this.timeSpan) {�  B  D              get dateList() {�  A  C              @computed�  @  B           �  ?  A              }�  >  @          '        return Object.values(dateList);�  =  ?          	        }�  <  >          =            dateList[T].addDate(t, this.widthPerHour.season);�  ;  =                      }�  :  <          9                dateList[T] = new DateGroup(T, "season");�  9  ;                      if (!dateList[T]) {�  8  :          1            const T = new Date(t).setMonth(0, 1);�  7  9                  ) {�  6  8          3            t += getDaysPerSeason(t) * 24 * 3600000�  5  7          %            t < this.endDateBySeason;�  4  6          +            let t = this.startDateBySeason;�  3  5                  for (�  2  4                  const dateList = {};�  1  3              get dateListBySeason() {�  0  2              @computed�  /  1           �  .  0              }�  -  /          '        return Object.values(dateList);�  ,  .          	        }�  +  -          <            dateList[T].addDate(t, this.widthPerHour.month);�  *  ,                      }�  )  +          8                dateList[T] = new DateGroup(T, "month");�  (  *                      if (!dateList[T]) {�  '  )          1            const T = new Date(t).setMonth(0, 1);�  &  (                  ) {�  %  '          2            t += getDaysPerMonth(t) * 24 * 3600000�  $  &          $            t < this.endDateByMonth;�  #  %          *            let t = this.startDateByMonth;�  "  $                  for (�  !  #                  const dateList = {};�     "              get dateListByMonth() {�    !              @computed�                �                  }�              '        return Object.values(dateList);�              	        }�              ;            dateList[T].addDate(t, this.widthPerHour.week);�                          }�              7                dateList[T] = new DateGroup(T, "week");�                          if (!dateList[T]) {�              -            const T = new Date(t).setDate(1);�              O        for (let t = this.startDateByWeek; t < this.endDateByWeek; t += unit) {�              &        const unit = 7 * 24 * 3600000;�                      const dateList = {};�                  get dateListByWeek() {�                  @computed�               �                  }�              '        return Object.values(dateList);�              	        }�              :            dateList[T].addDate(t, this.widthPerHour.day);�                          }�  
            6                dateList[T] = new DateGroup(T, "day");�  	                        if (!dateList[T]) {�    
          -            const T = new Date(t).setDate(1);�    	          M        for (let t = this.startDateByDay; t < this.endDateByDay; t += unit) {�              "        const unit = 24 * 3600000;�                      const dateList = {};�                  get dateListByDay() {�                  @computed�               �                  }�               	        }�   �            )                return this.endDateByDay;�   �                         default:�   �   �                      case "day":�   �   �          *                return this.endDateByWeek;�   �   �                      case "week":�   �   �          +                return this.endDateByMonth;�   �   �                      case "month":�   �   �          ,                return this.endDateBySeason;�   �   �                      case "season":�   �   �                   switch (this.timeSpan) {�   �   �              get endDate() {�   �   �              @computed�   �   �           �   �   �              }�   �   �          !        return endDate.getTime();�   �   �          2        endDate.setDate(getDaysPerMonth(endDate));�   �   �          K        endDate.setMonth((Math.floor(endDate.getMonth() / 3) + 4) * 3 - 1);�   �   �          %        endDate.setHours(0, 0, 0, 0);�   �   �          6        const endDate = new Date(this.secureDeadline);�   �   �              get endDateBySeason() {�   �   �              @computed�   �   �           �   �   �              }�   �   �          !        return endDate.getTime();�   �   �          2        endDate.setDate(getDaysPerMonth(endDate));�   �   �          1        endDate.setMonth(endDate.getMonth() + 3);�   �   �          %        endDate.setHours(0, 0, 0, 0);�   �   �          6        const endDate = new Date(this.secureDeadline);�   �   �              get endDateByMonth() {�   �   �              @computed�   �   �           �   �   �              }�   �   �          Q        return secureDeadline + (7 - day) * unit + (unit * 2) / 3 + 4 * 7 * unit;�   �   �          ;        const day = new Date(secureDeadline).getDay() || 7;�   �   �          3        const secureDeadline = this.secureDeadline;�   �   �          "        const unit = 24 * 3600000;�   �   �              get endDateByWeek() {�   �   �              @computed�   �   �           �   �   �              }�   �   �          Q        return (Math.floor(this.secureDeadline / unit) + 8) * unit - 8 * 3600000;�   �   �          "        const unit = 24 * 3600000;�   �   �              get endDateByDay() {�   �   �              @computed�   �   �           �   �   �              }�   �   �                   return result.getTime();�   �   �          $        result.setHours(8, 0, 0, 0);�   �   �          
        );�   �   �          Q            today > this.deadline ? today : this.deadline || this.secureStartTime�   �   �                  let result = new Date(�   �   �          K        const today = Math.round(new Date().getTime() / 3600000) * 3600000;�   �   �              get secureDeadline() {�   �   �              @computed�   �   �           �   �   �              }�   �   �          !        return maxGroup.deadline;�   �   �          
        );�   �   �                      {}�   �   �                              : previous,�   �   �                              ? current�   �   �          `                !previous.deadline || (current.deadline && current.deadline > previous.deadline)�   �   �          "            (previous, current) =>�   �   �          ,        const maxGroup = this.groups.reduce(�   �   �              get deadline() {�   �   �              @computed�   �   �           �   �   �              }�   �   �          	        }�   �   �          +                return this.startDateByDay;�   �   �                      default:�   �   �                      case "day":�   �   �          ,                return this.startDateByWeek;�   �   �                      case "week":�   �   �          -                return this.startDateByMonth;�   �   �                      case "month":�   �   �          .                return this.startDateBySeason;�   �   �                      case "season":�   �   �                   switch (this.timeSpan) {�   �   �              get startDate() {�   �   �              @computed�   �   �           �   �   �              }�   �   �          #        return startDate.getTime();�   �   �          N        startDate.setMonth((Math.floor(startDate.getMonth() / 3) - 1) * 3, 1);�   �   �          '        startDate.setHours(0, 0, 0, 0);�   �   �          9        const startDate = new Date(this.secureStartTime);�   �   �              get startDateBySeason() {�   �   �              @computed�   �   �           �   �   �              }�   �   �          #        return startDate.getTime();�   �   �          8        startDate.setMonth(startDate.getMonth() - 1, 1);�   �   �          '        startDate.setHours(0, 0, 0, 0);�   �   �          9        const startDate = new Date(this.secureStartTime);�   �   �              get startDateByMonth() {�   �   �              @computed�   �   �           �   �   �              }�   �   �          H        return secureStartTime - (day - 1) * unit - unit / 3 - 7 * unit;�   �   �          <        const day = new Date(secureStartTime).getDay() || 7;�   �   �          5        const secureStartTime = this.secureStartTime;�   �   �          "        const unit = 24 * 3600000;�   �   �              get startDateByWeek() {�   �   �              @computed�   �   �           �   �   �              }�   �   �          R        return (Math.floor(this.secureStartTime / unit) - 7) * unit - 8 * 3600000;�   �   �          "        const unit = 24 * 3600000;�   �   �              get startDateByDay() {�   �   �              @computed�   �   �           �   �   �              }�   �   �                   return result.getTime();�   �   �          $        result.setHours(8, 0, 0, 0);�   �   �          
        );�   �   �          U            today < this.startTime ? today : this.startTime || this.deadline || today�   �   �                  let result = new Date(�   �   �          K        const today = Math.round(new Date().getTime() / 3600000) * 3600000;�   �   �              get secureStartTime() {�   �   �              @computed�   �   �           �   �   �              }�   �   �          "        return minGroup.startTime;�   �   �          
        );�   �   �                      {}�   �   �                              : previous,�   �   �                              ? current�      �          d                !previous.startTime || (current.startTime && current.startTime < previous.startTime)�   ~   �          "            (previous, current) =>�   }             ,        const minGroup = this.groups.reduce(�   |   ~              get startTime() {�   {   }              @computed�   z   |           �   y   {              }�   x   z                   return taskVisibleLines;�   w   y                  });�   v   x                      }�   u   w          ,                count += this.groupDistance;�   t   v                          });�   s   u                              }�   r   t          =                        taskVisibleLines.set(task.id, count);�   q   s                                   count++;�   p   r          '                    if (task.visible) {�   o   q          -                group.tasks.forEach(task => {�   n   p          #            if (!group.collapsed) {�   m   o                      count++;�   l   n          &        this.groups.forEach(group => {�   k   m                      count = 0;�   j   l          )        let taskVisibleLines = new Map(),�   i   k              get taskVisibleLines() {�   h   j              @computed�   g   i           �   f   h              }�   e   g                  return result;�   d   f                  });�   c   e                      }�   b   d                          });�   a   c                                  });�   `   b          #                                });�   _   a          6                                    postTask: postTask�   ^   `          2                                    preTask: task,�   ]   _          @                                    rel_type: postLine.rel_type,�   \   ^          -                                result.push({�   [   ]          3                                postTask.visible &&�   Z   \          '                            postTask &&�   Y   [          M                            const postTask = this.getTask(postLine.ref_task);�   X   Z          ;                        task.position.forEach(postLine => {�   W   Y          (                        task.position &&�   V   X          #                    task.visible &&�   U   W          -                group.tasks.forEach(task => {�   T   V          #            if (!group.collapsed) {�   S   U          &        this.groups.forEach(group => {�   R   T                  let result = [];�   Q   S              get visiblePostLines() {�   P   R              @computed�   O   Q           �   N   P              }�   M   O                  return preTasks;�   L   N           �   K   M                  });�   J   L                      });�   I   K                              });�   H   J          !                              ]);�   G   I          #                                  }�   F   H          3                                      preTask: task�   E   G          B                                      rel_type: relation.rel_type,�   D   F          #                                  {�   C   E          8                            : preTasks.set(postTaskId, [�   B   D                                         })�   A   C          /                                  preTask: task�   @   B          >                                  rel_type: relation.rel_type,�   ?   A          -                            ? postTask.push({�   >   @                                   postTask�   =   ?          B                        const postTask = preTasks.get(postTaskId);�   <   >          =                        const postTaskId = relation.ref_task;�   ;   =          7                    task.position.forEach(relation => {�   :   <                           task.position &&�   9   ;          )            group.tasks.forEach(task => {�   8   :          &        this.groups.forEach(group => {�   7   9          #        const preTasks = new Map();�   6   8              get preTasks() {�   5   7              @computed�   4   6           �   3   5              }�   2   4                  return tasks;�   1   3                  });�   0   2                      });�   /   1          )                tasks.set(task.id, task);�   .   0          )            group.tasks.forEach(task => {�   -   /          &        this.groups.forEach(group => {�   ,   .          "        console.info(this.groups);�   +   -                   const tasks = new Map();�   *   ,              get tasks() {�   )   +              @computed�   (   *           �   '   )              }�   &   (          0        return this.widthPerHour[this.timeSpan];�   %   '          "    get widthPerHourByTimeSpan() {�   $   &              @computed�   #   %              }�   "   $          8        return this.rootStore.viewStore.currentLanguage;�   !   #              get currentLanguage() {�       "              @computed�      !              @observable groups = [];�                  �                    };�                        season: 0.05�                        month: 0.25,�                        week: 1,�                        day: 1.25,�                    widthPerHour = {�                    @observable�                 �                '    @observable groupsFinished = false;�                 �                $    @observable groupDistance = 1.5;�                 �                !    @observable timeSpan = "day";�                 �                     @observable leftWidth = 300;�                 �                    }�                         this.setGroups(groupBy);�                        this.groupBy = groupBy;�   
             %        this.panelStore = panelStore;�   	             #        this.rootStore = rootStore;�      
          B    constructor({ rootStore, panelStore, groupBy = "swimlane" }) {�      	          export default class Gantt {�                 �                $import { notification } from "antd";�                 �                Iimport { getDaysPerMonth, getDaysPerSeason } from "../../constants/tool";�                $import DateGroup from "./DateGroup";�                import Group from "./Group";�                 4import { observable, action, computed } from "mobx";5�_�                    -       ����                                                                                                                                                                                                                                                                                                                                                             \�*    �   ,   -          "        console.info(this.groups);5�_�                    "       ����                                                                                                                                                                                                                                                                                                                                                             \�3    �   "   $  n    �   "   #  n    5�_�                     #       ����                                                                                                                                                                                                                                                                                                                                                             \乎    �   "   #          "        console.info(this.groups);5��