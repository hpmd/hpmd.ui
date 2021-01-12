# hpmd.ui

## О библиотеке:
HPMD.ui - Набор интерфейсов на основе Bootstrap 4 (и нескольких более мелких библиотек), сделанный для быстрого создания дэшбордов и подобных интерфейсов.
Библиотека включает:
- Набор CSS - в виде подключаемого SCSS файла с возможностью кастомизации до сборки
- Vue-компоненты (Vue 2): набор отдельных компонентов для использования в Vue-приложениях.

___

## Установка
**HTTPS:**
```
npm install git+https://github.com/hpmd/hpmd.ui.git
```

**SSH:**
```
npm install git+ssh://git@github.com/hpmd/hpmd.ui.git
```

___

## Подключение и использование
### Подключение библиотеки для глобального использования
```javascript
// main.js
import Vue from 'vue';
import { HpmdUI } from 'hpmd.ui';
import 'hpmd.ui/src/scss/hpmd.ui.scss';

// ...

Vue.use(HpmdUI);
```


### Подключение отдельных компонентов для глобального использования
```javascript
// main.js
import Vue from 'vue';
import {
    ButtonPlugin
    TablePlugin
} from 'hpmd.ui';
// import global scss
import 'hpmd.ui/src/scss/hpmd.ui.scss';

Vue.use(ButtonPlugin);
Vue.use(TablePlugin);
```


### Подключение отдельных компонентов для локального использования
```javascript
// MyComponent.js
import {
    HmButton,
    HmTable
} from 'hpmd.ui';

export default {
    components: {
        HmButton,
        HmTable
    }
};
```


### SCSS
SCSS можно подключить как глобально (предпочтительно при импорте библиотеки полностью):
```javascript
// main.js
import 'hpmd.ui/src/scss/hpmd.ui.scss';
```

так и отдельными модулями, для того чтобы сэкономить на весе итогового css-файла.
Обязательным для подключения является файл `base.scss` (основные переменные и функции Bootstrap)
```javascript
// main.js
import './path/to/your.scss';
```

```scss
@import '~hpmd.ui/src/scss/base';
@import '~hpmd.ui/src/scss/button';
@import '~hpmd.ui/src/scss/table';
```

___

## Компоненты
### Alert *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/alert) **Без изменений**

**Реализованные компоненты:**
* HmAlert

---

### Avatar

Component: **HmAvatar**
```javascript
// MyComponent.vue
<hm-avatar
    :src="imageURL"
    variant="danger"
    size="sm"
/>
```
**Свойства**
| Свойство | Тип    | По-умолчанию  | Допустимые значения     | Описание              |
|----------|--------|---------------|-------------------------|-----------------------|
| `size`   | String | 'md'          | xs, sm, md, lg          | Размер аватара        |
| `src`    | String | ''            |                         | URL изображения       |
| `variant`| String | 'secondary'   | Значения из цветов темы | Цвет подложки аватара |


**События**
| Событие          | Передаваемые данные | Описание                        |
|------------------|---------------------|---------------------------------|
| `imageLoadError` | Error Event data    | Данные из события image.onerror |

---

### Badge *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/badge) **Без изменений**

**Реализованные компоненты:**
* HmBadge

---

### Button *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/button) **Без изменений**

**Реализованные компоненты:**
* HmButton (HmBtn)
* HmButtonClose (HmBtnClose)

---

### Button Group *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/button-group) **Без изменений**

**Реализованные компоненты:**
* HmButtonGroup

---

### Calendar *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/calendar)

**Реализованные компоненты:**
* HmCalendar

**Добавленные свойства**
| Свойство      | Тип                   | По-умолчанию  | Допустимые значения                                               | Описание                 |
|---------------|-----------------------|---------------|-------------------------------------------------------------------|--------------------------|
| `isRange`     | Boolean               | false         |                                                                   | Выбрать диапазон дат     |
| `showYearBtns`| Boolean               | false         |                                                                   | Цвет подложки аватара    |
| `value`       | String, Date, Date[]  |               | строка в формате `YYYY-MM-DD`, объект даты или массив из двух дат | Изменяемое значение даты |

---

### Card *(Bootstrap Vue)
> **DEPRECATED**: use css classes instead

[Документация](https://bootstrap-vue.org/docs/components/card) **Без изменений**

**Реализованные компоненты:**
* HmCard

---

### Checkbox *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/form-checkbox) **Без изменений**

**Реализованные компоненты:**
* HmCheckbox
* HmCheckboxGroup

---

### Collapse *(Boostrap Vue)
> WARN: возможна переработка

[Документация](https://bootstrap-vue.org/docs/components/form-checkbox)

**Реализованные компоненты:**
* HmCollapse

**Добавленные свойства**
| Свойство    | Тип    | По-умолчанию  | Допустимые значения | Описание                                 |
|-------------|--------|---------------|---------------------|------------------------------------------|
| `buttonText`| String | ''            |                     | Текст кнопки, которая разворачивает блок |

---

### Datepicker *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/form-datepicker)

**Реализованные компоненты:**
* HmDatepicker

**Добавленные свойства**
| Свойство    | Тип     | По-умолчанию       | Допустимые значения | Описание                                 |
|-------------|---------|--------------------|---------------------|------------------------------------------|
| `range`     | Boolean | false              |                     | Выбрать диапазон дат                     |
| `useNative` | Boolean | (Detect mobile OS) |                     | Использовать нативный ввод даты (input type="date") |

---

### Dropdown *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/dropdown) **Без изменений**

**Реализованные компоненты:**
* HmDropdown
* HmDropdownItemButton
* HmDropdownDivider
* HmDropdownItem

---

### File Input *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/form-file)

**Реализованные компоненты:**
* HmFileInput

---

### Form *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/form) **Без изменений**

[Документация Form Group](https://bootstrap-vue.org/docs/components/form-group) **Без изменений**

**Реализованные компоненты:**
* HmForm
* HmFormDatalist
* HmFormGroup
* HmFormInvalidFeedback
* HmFormText
* HmFormValidFeedback

---

### Icon
Компонент для отрисовки SVG-иконок в тексте или любых блоках. 
Основной случай использования - монохромные иконки для элементов интерфейса.

#### Регистрация (добавление) иконок

Для того чтобы размер приложения не страдал от кучи неиспользуемых иконов, все иконки добавляются вручную.
Есть два варианта добавления (регистрации) иконок:

**$hmIcon.add() - При установке глобально**
```javascript
// MyComponent.vue

export default {
    created() {
        this.$hmIcon.add(iconObject);
    }
}
```

**HmIcon.add() - При импорте компонента**
```javascript
// MyComponent.vue
import { HmIcon } from 'hpmd.ui';
HmIcon.add(iconObject);
```

В обоих случаях новая иконка будет доступна для всего приложения (т.е. не обязательно добавлять ее в каждом месте, где она будет использоваться)

#### Размеры и стили

Размер иконки равен размеру текста блока-родителя (1em). Для установки отличного от текста размера заверните иконку в контейнер и проставьте `font-size`.

Цвет иконки по-умолчанию равен цвету текста - это довольно удобно для мягких переходов при hover-эффектах, например, кнопок. При желании можно указать свой собственный цвет через свойство `fill`.

#### Добавление новых иконок

Можно (и часто нужно) подключать свои иконки. Формат следующий:
```javascript
export {
    "name": "sort",
    "style": "line",
    "width": 24,
    "height": 24,
    "content": "<path d=\"M16.29,14.29,12,18.59l-4.29-4.3a1,1,0,0,0-1.42,1.42l5,5a1,1,0,0,0,1.42,0l5-5a1,1,0,0,0-1.42-1.42ZM7.71,9.71,12,5.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-5-5a1,1,0,0,0-1.42,0l-5,5A1,1,0,0,0,7.71,9.71Z\"/>"
}
```

#### Добавленные компоненты:
Component: **HmAvatar**
```javascript
import { HmIcon } from 'hpmd.ui';
import { uniTimes } from 'hpmd.ui/src/assets/icons/unicons';

HmIcon.add(uniTimes)
// MyComponent.vue
<hm-icon
    name="times"
    fill="#990000"
/>
```

**Свойства**
| Свойство    | Тип     | По-умолчанию       | Допустимые значения | Описание                                 |
|-------------|---------|--------------------|---------------------|------------------------------------------|
| `fill`      | String  | 'currentColor'              |                     | Выбрать диапазон дат                     |
| `name`      | String  | (Detect mobile OS) |                     | Использовать нативный ввод даты (input type="date") |




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
