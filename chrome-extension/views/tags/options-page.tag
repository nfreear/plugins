<options-page>
    <div class="container">
        <h2>Options</h2>
        <!-- place the custom tag anywhere inside the body -->
        <div each={ cmdGroups } class="cmd-group">
            <div class="collapser-shell { collapsed: collapsed, enabled: enabled }">
                <a class="collapser" title="Click to { collapsed ? 'expand' : 'collapse' }" onclick={ toggleCollapsed } href="#">
                    <div class="label">{ name } <span class="version">v{ version }</span> <span class="right-controls"><label><input type="checkbox" onclick={ toggleGroupEnabled } checked={ enabled } > Enabled</label></span>
                        <div class="desc">{ description }</div>
                    </div>
                </a>
                <div class="collapsable">
                    <div class="collapsable-inner">
                        <div class="homophones">
                            <div class="label">
                                <strong>Homophones/synonyms: </strong>
                            </div>
                            <div class="tag-list">
                                <label class="tag" each={ homophones }><input type="checkbox" checked={ enabled }> { source } ➪ { destination }</label>
                            </div>
                        </div>
                        <table>
                            <thead>
                                <th>Enabled</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Command Words</th>
                            </thead>
                            <tbody>
                                <tr data-is="cmd" each={commands} name={name} description={description} match={match}></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <style>
    input[type=checkbox],
    input[type=radio] {
        vertical-align: middle;
        position: relative;
        bottom: 1px;
    }

    .homophones .label {
        float: left;
        width: 20%;
    }

    .homophones {
        margin-bottom: 15px;
        display: block;
        float: left;
    }

    .homophones .tag-list {
        float: left;
        width: 70%;
        text-align: left;
    }

    input[type=radio] {
        bottom: 2px;
    }

    td.enable {
        text-align: center;
    }

    .collapser .label {
        margin-left: 15px;
    }

    .desc {
        font-style: italic;
        color: #a4a4a4;
        text-align: left;
    }

    .cmd .desc {
        font-style: normal;
    }

    .version {
        margin-left: 10px;
        color: #a4a4a4;
    }

    .enabled .collapser {
        color: #222;
    }

    .enabled .desc {
        color: #868686;
    }

    .enabled .version {
        color: #868686;
    }

    .cmd-group {
        margin: 10px 0;
    }

    .right-controls {
        float: right;
        margin-right: 20px;
    }

    .container {
        max-width: 900px;
        margin: 0 auto;
    }

    .collapser {
        /*font-size: 1.05rem;*/
        width: 100%;
        line-height: 1.2rem;
        text-align: left;
        background-color: #eee;
        color: #888;
        border-left: 1px solid #888;
        padding: 3px 5px;
        text-decoration: none;
        display: block;
    }

    .collapser:before {
        content: '-';
        position: absolute;
    }

    .collapsed .collapser:before {
        content: '+';
    }

    .collapser-shell {}

    .collapsable {
        transition: max-height 0.35s ease-out;
        display: block;
        background-color: #f5f5f5;
        overflow: hidden;
        /* max height is set via js dynamically for smooth animation*/
    }

    .collapsable-inner {
        padding: 10px 20px;
    }

    .collapsed .collapsable {
        max-height: 0 !important;
    }

    .tag {
        background-color: #e6e6e6;
        border-radius: 3px;
        line-height: 1.5em;
        margin: 2px;
        display: inline-block;
        padding: 3px 6px;
        white-space: nowrap;
    }

    table {
        display: block;
        margin-top: 15px;
    }

    tr {
        vertical-align: top;
    }

    tbody,
    thead {
        text-align: left;
    }

    td {
        border-top: 1px solid #ddd;
        padding: .7rem;
    }

    th {
        padding: 0 .7rem;
    }
    </style>
    <script>
    // set the max height on each accordion item, then shrink the ones
    // that need to be based on user settings
    function init() {
        $('.collapsable').each(function(i, ele) {
            let $ele = $(ele);
            $ele.css('max-height', $ele.parent().find('.collapsable').height());
        });
    }
    this.cmdGroups = opts.cmdGroups;
    this.save = opts.save;
    // TODO: load from settings
    this.cmdGroups.map((item) => {
        item.collapsed = false;
        item.enabled = true;

        item.homophones = Object.keys(item.homophones).map(function(key, index) {
            return {
                source: key,
                enabled: true,
                destination: item.homophones[key]
            };
        });
        item.commands.map((cmd) => {
            // make sure it's defined so we don't take parents
            cmd.description = cmd.description ? cmd.description : null;
            cmd.enabled = true;
        });
    });
    toggleGroupEnabled(e) {
        e.stopPropagation();
        let item = e.item;
        item.enabled = !item.enabled;
    }
    toggleCollapsed(e) {
        // hack to get around propagation not being stopped in riot
        if (e.target.nodeName.toLowerCase() != 'input' &&
            e.target.nodeName.toLowerCase() != 'label') {
            let item = e.item;
            item.collapsed = !item.collapsed;
        }
    }
    riot.mount('cmd');
    $(document).ready(function() {
        init();
    });
    </script>
</options-page>