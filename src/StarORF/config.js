define(["require", "exports"], function(require, exports) {
    var ConfigElement = (function () {
        function ConfigElement(out, key, description, defaultValue) {
            this.out = out;
            this.key = key;
            this.description = description;
            this.defaultValue = defaultValue;
        }
        ConfigElement.prototype.parse = function (config_obj, target) {
            if(typeof config_obj[this.key] === 'undefined') {
                target[this.out] = this.defaultValue;
            } else {
                target[this.out] = config_obj[this.key];
            }
        };
        return ConfigElement;
    })();
    exports.ConfigElement = ConfigElement;    
    exports.config = [
        new ConfigElement('show_input_sequence', 'show_input_sequence', 'Show Input Sequence Element', true), 
        new ConfigElement('show_input_sequence_title', 'show_input_sequence_title', 'Show Input Sequence Title', true), 
        new ConfigElement('show_sequence_length', 'show_sequence_length', 'show_sequence_length', true), 
        new ConfigElement('show_gc_percentage', 'show_gc_percentage', 'show_gc_percentage', true), 
        new ConfigElement('show_minimal_orf_length', 'show_minimal_orf_length', 'show_minimal_orf_length', true), 
        new ConfigElement('show_minimal_orf_length_button', 'show_minimal_orf_length_button', 'show_minimal_orf_length_button', true), 
        new ConfigElement('initial_minimal_orf_legth', 'initial_minimal_orf_legth', 'initial_minimal_orf_legth', 80), 
        new ConfigElement('show_reverse_complement', 'show_reverse_complement', 'show_reverse_complement', true), 
        new ConfigElement('show_calculate_all_orfs', 'show_calculate_all_orfs', 'show_calculate_all_orfs', true), 
        new ConfigElement('show_3_1_letter_code_toggle', 'show_3_1_letter_code_toggle', 'show_3_1_letter_code_toggle', true), 
        new ConfigElement('initial_letter_code_type', 'initial_letter_code_type', 'initial_letter_code_type', 3), 
        new ConfigElement('show_slider', 'show_slider', 'show_slider', true), 
        new ConfigElement('show_putative_orf', 'show_putative_orf', 'show_putative_orf', true), 
        new ConfigElement('show_blast_putative_orf', 'show_blast_putative_orf', 'show_blast_putative_orf', true), 
        new ConfigElement('output_selector', 'output_selector', 'output_selector', null), 
        new ConfigElement('output_letter_code_type', 'output_letter_code_type', 'output_letter_code_type', 1), 
        new ConfigElement('output_basepair_start', 'output_basepair_start', 'output_basepair_start', false), 
        new ConfigElement('output_basepair_end', 'output_basepair_end', 'output_basepair_end', false), 
        new ConfigElement('output_basepair_length', 'output_basepair_length', 'output_basepair_length', false), 
        new ConfigElement('output_separator', 'output_separator', 'output_separator', ",")
    ];
    exports.parse = function (source_object, input_config) {
        if (typeof input_config === "undefined") { input_config = {
        }; }
        console.info(exports.config);
        for(var i in exports.config) {
            exports.config[i].parse(source_object, input_config);
        }
        console.info(source_object);
        console.info(input_config);
        return input_config;
    };
})
//@ sourceMappingURL=config.js.map
