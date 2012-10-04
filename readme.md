# CandyTabs

CandyTabs is a simple little tabs plugin for jQuery.

## Usage

Include all the scripts and styles however you want (I'd recommend something async).

The markup is easy-peasy

    <div id="tabs">
        <ul>
            <li><a href="#box1" class="active-tab">Tab Title Here</a></li>
            <li><a href="#box2">Tab Title Here</a></li>
            <li><a href="#box3">Tab Title Here</a></li>
        </ul>
        <div id="box1" class="active">
            Box 1
        </div>
        <div id="box2">
            Box 2
        </div>
        <div id="box3">
            Box 1
        </div>
    </div>

By default the active classes are `active` and `active-tab` however these can be overridden in the usual way.