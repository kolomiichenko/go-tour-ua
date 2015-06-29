/* Copyright 2012 The Go Authors.   All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
'use strict';

angular.module('tour.values', []).

// List of modules with description and lessons in it.
value('tableOfContents', [{
    'id': 'mechanics',
    'title': 'Користування туром',
    'description': '<p>Ласкаво просимо до туру з <a href="http://golang.org">мови програмування Go</a>. Тур осягає набільш важливі властивості мови, зокрема:</p>',
    'lessons': ['welcome']
}, {
    'id': 'basics',
    'title': 'Основи',
    'description': '<p>Початкова точка, вивчіть усі основи мови.</p><p>Оголошення змінних, виклик функцій та всі типи, як ви повинні знати перед тим, як переходити до наступних занять.</p>',
    'lessons': ['basics', 'flowcontrol', 'moretypes']
}, {
    'id': 'methods',
    'title': 'Методи та інтерфейси',
    'description': '<p>Вивчіть, як визначати методи для типів, як оголошувати інтерфеси, та як зв’язати все між собою.</p>',
    'lessons': ['methods']
}, {
    'id': 'concurrency',
    'title': 'Конкуренція',
    'description': '<p>Go надає можливості конкуренції, як частину ядра самої мови.</p><p>Даний модуль проходить go-підпрограми та канали, та як вони слугують для втілення різних зразків конкуренції.</p>',
    'lessons': ['concurrency']
}]).

// translation
value('translation', {
    'off': 'вимкн',
    'on': 'увімк',
    'syntax': 'Вирізення-Синтаксису',
    'lineno': 'Номери-Рядків',
    'reset': 'Відновити слайд',
    'format': 'Формат вихідного коду',
    'kill': 'Вбити програму',
    'run': 'Виконати',
    'compile': 'Скомпілювати та виконати',
    'more': 'Налаштування',
    'toc': 'Зміст',
    'prev': 'Назад',
    'next': 'Далі',
    'waiting': 'Очікування на віддалений сервер...',
    'errcomm': 'Помилка зв’язку з віддаленим сервером.',
    'submit-feedback': 'Відправити відгук стосовно цієї сторінки',

    // GitHub issue template: update repo and messaging when translating.
    'github-repo': 'github.com/mak73kur/go-tour-ua',
    'issue-title': 'tour: [короткий опис проблеми]',
    'issue-message': 'Опишіть суть проблеми, в першу чергу те, що стосується перекладу.',
    'context': 'Контекст',
}).

// Config for codemirror plugin
value('ui.config', {
    codemirror: {
        mode: 'text/x-go',
        matchBrackets: true,
        lineNumbers: true,
        autofocus: true,
        indentWithTabs: true,
        indentUnit: 4,
        tabSize: 4,
        lineWrapping: true,
        extraKeys: {
            'Shift-Enter': function() {
                $('#run').click();
            },
            'Ctrl-Enter': function() {
                $('#format').click();
            },
            'PageDown': function() {
                return false;
            },
            'PageUp': function() {
                return false;
            },
        },
        // TODO: is there a better way to do this?
        // AngularJS values can't depend on factories.
        onChange: function() {
            if (window.codeChanged !== null) window.codeChanged();
        }
    }
});
