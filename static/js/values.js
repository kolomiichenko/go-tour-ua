/* Copyright 2012 The Go Authors.   All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
'use strict';

angular.module('tour.values', []).

// List of modules with description and lessons in it.
value('tableOfContents', [{
    'id': 'mechanics',
    'title': 'Використання туру',
    'description': '<p>Ласкаво просимо до туру з <a href="http://golang.org">мови програмування Go</a>. Тур осягає набільш важливі властивості мови, зокрема:</p>',
    'lessons': ['welcome']
}, {
    'id': 'basics',
    'title': 'Основи',
    'description': '<p>The starting point, learn all the basics of the language.</p><p>Declaring variables, calling functions, and all the things you need to know before moving to the next lessons.</p>',
    'lessons': ['basics', 'flowcontrol', 'moretypes']
}, {
    'id': 'methods',
    'title': 'Методи та інтерфейси',
    'description': '<p>Learn how to define methods on types, how to declare interfaces, and how to put everything together.</p>',
    'lessons': ['methods']
}, {
    'id': 'concurrency',
    'title': 'Конкуренція',
    'description': '<p>Go provides concurrency features as part of the core language.</p><p>This module goes over goroutines and channels, and how they are used to implement different concurrency patterns.</p>',
    'lessons': ['concurrency']
}]).

// translation
value('translation', {
    'off': 'вимкн',
    'on': 'увімкн',
    'syntax': 'Вирізення-Синтаксису',
    'lineno': 'Номери-Рядків',
    'reset': 'Reset Slide',
    'format': 'Format Source Code',
    'kill': 'Вбити програму',
    'run': 'Виконання',
    'compile': 'Скомпілювати та виконати',
    'more': 'Options',
    'toc': 'Зміст',
    'prev': 'Назад',
    'next': 'Далі',
    'waiting': 'Очікування на віддалений сервер...',
    'errcomm': 'Помилка зв’язку з віддаленим сервером.',
    'submit-feedback': 'Відправити відгус стосовно цієї сторінки',

    // GitHub issue template: update repo and messaging when translating.
    'github-repo': 'github.com/golang/go',
    'issue-title': 'tour: [short description of the issue]',
    'issue-message': 'Describe your feedback here, including code if necessary',
    'context': 'Context',
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
