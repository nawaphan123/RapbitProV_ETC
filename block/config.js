const dirIcon = Vue.prototype.$global.board.board_info.dir;
module.exports = {
    base_blocks : [ // use "blocks : [ " in normally situation but this need to override base block from esp-idf platforms
                {
            name : 'Display',
            index: 1,
            color : '230',
            icon: "/static/icons/icons8_picture_96px_1.png",
            blocks : [
                
                
                { 
                    xml : 
                    `<block type="i2c128x64_display_print">
                        <value name="text">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello world!</field>
                            </shadow>
                        </value>
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'i2c128x64_display_clear',
                'i2c128x64_display_display',
                'basic_string', 
                'text_join',
                {
                    xml : `<block type="variables_set">
                                <field name="VAR">img1</field>
                                <value name="VALUE">
                                    <block type="i2c128x64_create_image" inline="false"></block>
                                </value>
                            </block>`
                },{
                    xml : 
                    `<block type="i2c128x64_display_image">
                        <value name="img">
                            <block type="variables_get">
                                <field name="VAR">img1</field>
                            </block>
                        </value>
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="width">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="height">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="i2c128x64_display_draw_line">
                        <value name="x0">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="y0">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="x1">
                            <shadow type="math_number">
                                <field name="NUM">100</field>
                            </shadow>
                        </value>
                        <value name="y1">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="i2c128x64_display_draw_rect">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="width">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="height">
                            <shadow type="math_number">
                                <field name="NUM">30</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="i2c128x64_display_draw_circle">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">64</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">32</field>
                            </shadow>
                        </value>
                        <value name="r">
                            <shadow type="math_number">
                                <field name="NUM">20</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="i2c128x64_display_draw_progress_bar">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">32</field>
                            </shadow>
                        </value>
                        <value name="width">
                            <shadow type="math_number">
                                <field name="NUM">120</field>
                            </shadow>
                        </value>
                        <value name="height">
                            <shadow type="math_number">
                                <field name="NUM">30</field>
                            </shadow>
                        </value>
                        <value name="progress">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="i2c128x64_display_draw_pixel">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">64</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">32</field>
                            </shadow>
                        </value>    
                    </block>`
                },
                {
                    xml : 
                    `<block type="i2c128x64_display_string_width">
                        <value name="text">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello world!</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'i2c128x64_display_width',
                'i2c128x64_display_height',
                'basic_string'
            ]
        },

        {
            name : 'Motor',
            index: 2,
            color : '230',
            icon: `file:///${dirIcon}/static/RapbitPro.png`,
            blocks : [

                
                { 
                    xml : 
                    `<block type="RapbitPro_servo">
                        <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="angle">
                            <shadow type="math_number">
                                <field name="NUM">90</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="RapbitPro_servo_speed_control">
                        <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="servo_degree">
                            <shadow type="math_number">
                                <field name="NUM">90</field>
                            </shadow>
                        </value>
                        <value name="traget_degree">
                            <shadow type="math_number">
                                <field name="NUM">120</field>
                            </shadow>
                        </value>
                        <value name="servo_speed">
                            <shadow type="math_number">
                                <field name="NUM">5</field>
                            </shadow>
                        </value>
                    </block>`
                },
                //'RapbitPro_motor_stop',
                {
                    xml : 
                    `<block type="RapbitPro_motor_stop_ch">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="RapbitPro_motor_forward">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="RapbitPro_motor_backward">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="RapbitPro_motor_turn">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="timer">
                            <shadow type="math_number">
                                <field name="NUM">200</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="RapbitPro_motor_spin">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="timer">
                            <shadow type="math_number">
                                <field name="NUM">200</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="RapbitPro_motor">
                        <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="dir">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="RapbitPro_motor_forward2">
                        <value name="speed1">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="speed2">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="RapbitPro_motor_backward2">
                        <value name="speed1">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="speed2">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                
                ]
        },

        {
            name : 'Sensor',
            index: 3,
            color : '200',
            icon : '/static/icons/icons8_thermometer_96px.png',
            blocks : [
                'sw1_press',
                'Read_ADC',
                'button_1_status',
                'Knob_status',
                'Ultrasinoc_sensor',
                
                {
                    xml : 
                    `<block type="Light_Sensor">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'RapbitPro_beep',
                {
                    xml : 
                    `<block type="RapbitPro_beep_delay">
                        <value name="_delay">
                            <shadow type="math_number">
                                <field name="NUM">500</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'RapbitPro_beep_on',
                'RapbitPro_beep_off',
            ]
        },
        {
            name : 'ETC',
            index: 4,
            color : '200',
            icon : `file:///${dirIcon}/static/ETC.png`,
            blocks : [    
                'readYellow',
                {
                    xml : 
                    `<block type="runCheckPoint">
                        <value name="_s1">
                            <shadow type="math_number">
                                <field name="NUM">500</field>
                            </shadow>
                        </value>
                        <value name="_s2">
                            <shadow type="math_number">
                                <field name="NUM">500</field>
                            </shadow>
                        </value>
                        <value name="_s3">
                            <shadow type="math_number">
                                <field name="NUM">500</field>
                            </shadow>
                        </value>
                    </block>`
                },
                // 'setup_gyro',
                'read_gyro_sensor',

                {
                    xml : 
                    `<block type="turnto">
                        <value name="anGle">
                            <shadow type="math_number">
                                <field name="NUM">90</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="run_st">
                        <value name="_time">
                            <shadow type="math_number">
                                <field name="NUM">500</field>
                            </shadow>
                        </value>
                        <value name="_speed">
                            <shadow type="math_number">
                                <field name="NUM">70</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="run_back">
                        <value name="b_time">
                            <shadow type="math_number">
                                <field name="NUM">500</field>
                            </shadow>
                        </value>
                        <value name="b_speed">
                            <shadow type="math_number">
                                <field name="NUM">70</field>
                            </shadow>
                        </value>
                    </block>`
                },            
            ]
        },
        {
            name : 'Mission',
            index: 5,
            color : '200',
            icon: `file:///${dirIcon}/static/mission.png`,
            blocks : [
                {
                    xml : 
                    `<block type="setCalibrate">
                        <value name="Round">
                            <shadow type="math_number">
                                <field name="NUM">1000</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="RapbitPro_PID_setMin">
                        <value name="L1">
                            <shadow type="math_number">
                                <field name="NUM">100</field>
                            </shadow>
                        </value>
                        <value name="L2">
                            <shadow type="math_number">
                                <field name="NUM">100</field>
                            </shadow>
                        </value>
                        <value name="L3">
                            <shadow type="math_number">
                                <field name="NUM">100</field>
                            </shadow>
                        </value>
                        <value name="L4">
                            <shadow type="math_number">
                                <field name="NUM">100</field>
                            </shadow>
                        </value>
                        <value name="L5">
                            <shadow type="math_number">
                                <field name="NUM">100</field>
                            </shadow>
                        </value>
                        <value name="L6">
                            <shadow type="math_number">
                                <field name="NUM">100</field>
                            </shadow>
                        </value>
                        <value name="L7">
                            <shadow type="math_number">
                                <field name="NUM">100</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="RapbitPro_PID_setMax">
                        <value name="L1">
                            <shadow type="math_number">
                                <field name="NUM">1023</field>
                            </shadow>
                        </value>
                        <value name="L2">
                            <shadow type="math_number">
                                <field name="NUM">1023</field>
                            </shadow>
                        </value>
                        <value name="L3">
                            <shadow type="math_number">
                                <field name="NUM">1023</field>
                            </shadow>
                        </value>
                        <value name="L4">
                            <shadow type="math_number">
                                <field name="NUM">1023</field>
                            </shadow>
                        </value>
                        <value name="L5">
                            <shadow type="math_number">
                                <field name="NUM">1023</field>
                            </shadow>
                        </value>
                        <value name="L6">
                            <shadow type="math_number">
                                <field name="NUM">1023</field>
                            </shadow>
                        </value>
                        <value name="L7">
                            <shadow type="math_number">
                                <field name="NUM">1023</field>
                            </shadow>
                        </value>
                    </block>`
                },

                'Readline_PID',
                { 
                    xml : 
                    `<block type="RapbitPro_Run_PID">
                        <value name="speed_motor">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="kp">
                            <shadow type="math_number">
                                <field name="NUM">0.5</field>
                            </shadow>
                        </value>
                        <value name="kd">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
                },
                 { 
                    xml : 
                    `<block type="Run_until_frontsensor">
                        <value name="speed_motor">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="kp">
                            <shadow type="math_number">
                                <field name="NUM">0.5</field>
                            </shadow>
                        </value>
                        <value name="kd">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="Sumvalue">
                            <shadow type="math_number">
                                <field name="NUM">400</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="Run_until_backsensor">
                        <value name="speed_motor">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="kp">
                            <shadow type="math_number">
                                <field name="NUM">0.5</field>
                            </shadow>
                        </value>
                        <value name="kd">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="Sumvalue">
                            <shadow type="math_number">
                                <field name="NUM">150</field>
                            </shadow>
                        </value>
                    </block>`
                },
                
                {
                    xml : 
                    `<block type="spin_left90">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="timer">
                            <shadow type="math_number">
                                <field name="NUM">300</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="spin_right90">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="timer">
                            <shadow type="math_number">
                                <field name="NUM">300</field>
                            </shadow>
                        </value>
                    </block>`
                },
                
                
            ]
        },

               
        {
            name : 'Time',
            index: 6,
            color : '230',
            icon : '/static/icons/icons8_Story_Time_96px.png',
            blocks : [
                {
                    xml : 
                    `<block type="time_delay">
                        <value name="delay">
                            <shadow type="math_number">
                                <field name="NUM">500</field>
                            </shadow>
                        </value>
                    </block>`
                },
                // 'time_sync',
                // 'time_get_year',
                // 'time_get_month',
                // 'time_get_day',
                // 'time_get_day_of_week',
                // 'time_get_hour',
                // 'time_get_minute',
                // 'time_get_second',
                'time_millis',
                'time_micros'
            ]
        },        
        
        {
            name : 'Variables',
            index: 7,
            color : '230',
            icon : '/static/icons/icons8_variable_96px.png',
            custom : 'VARIABLE'
        },
        {
            name : 'Math',
            index: 8,
            color : '230',
            icon : '/static/icons/calculator.png',
            blocks : [
                'math_number',
                {
                    xml : 
                    `<block type="math_arithmetic">
                        <value name="A">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="B">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="math_variables_set">
                        <value name="VALUE">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'math_variables_get',
                {
                    xml : 
                    `<block type="math_pow">
                        <value name="NUM1">
                            <shadow type="math_number">
                                <field name="NUM">2</field>
                            </shadow>
                        </value>
                        <value name="NUM2">
                            <shadow type="math_number">
                                <field name="NUM">3</field>
                            </shadow>
                        </value>
                    </block>`
                },                
                /*'math_sqrt',*/
                {
                    xml : 
                    `<block type="math_single">
                        <value name="NUM">
                            <shadow type="math_number">
                                <field name="NUM">9</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="math_trig">
                        <value name="NUM">
                            <shadow type="math_number">
                                <field name="NUM">90</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="math_round">
                        <value name="NUM">
                            <shadow type="math_number">
                                <field name="NUM">1.2</field>
                            </shadow>
                        </value>
                    </block>`
                },
                /*'math_min',
                'math_max',
                'math_map',*/
                'math_random_int',
                {
                    xml : 
                    `<block type="math_number_property">
                        <value name="NUMBER_TO_CHECK">
                            <shadow type="math_number">
                                <field name="NUM">5</field>
                            </shadow>
                        </value>
                    </block>`
                }
            ]
        },
        {
            name : 'Logic',
            index: 9,
            color : '230',
            icon : '/static/icons/icons8_serial_tasks_96px.png',
            blocks : [
                'controls_if',
                {
                    xml : '<block type="controls_if"><mutation else="1"></mutation></block>'
                },
                'logic_compare',
                'logic_operation',
                'logic_negate',
                'logic_boolean',
            ]
        },
        {
            name : 'Loops',
            index: 10,
            color : '230',
            icon : '/static/icons/icons8_repeat_96px.png',
            blocks : [
                'basic_forever',
                'controls_whileUntil',
                {
                    xml : 
                    `<block type="controls_for">
                        <value name="FROM">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="TO">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="BY">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'controls_flow_statements',
            ]
        },
        {
            name : 'GPIO',
            index: 11,
            color : '230',
            icon : '/static/icons/icons8_electronics_96px.png',
            blocks : [
                {
                    xml : 
                    `<block type="io_setpin">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">25</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="io_digital_read">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">32</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="io_digital_write">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">33</field>
                            </shadow>
                        </value>
                        <value name="value">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
                },                
                {
                    xml : 
                    `<block type="io_analog_read">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">36</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml :
                        `<block type="io_analog_write">
                        <value name="value">
                            <shadow type="math_number">
                                <field name="NUM">128</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="io_pwm_write">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">36</field>
                            </shadow>
                        </value>
                        <value name="value">
                            <shadow type="math_number">
                                <field name="NUM">128</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="io_pulse_in">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">36</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'io_shift_in',
                {
                    xml : 
                    `<block type="io_shift_out">
                        <value name="data">
                            <shadow type="math_number">
                                <field name="NUM">127</field>
                            </shadow>
                        </value>
                    </block>`
                }
            ]
        }, 
        {
            name : 'Advanced',
            index: 12,
            color : '195',
            icon : '/static/icons/icons8_hacker_128px.png',
            blocks : [
                {
                    type : 'category',
                    name : 'Functions',
                    icon : '/static/icons/icons8_module_96px.png',
                    custom : 'PROCEDURE'
                },
                /*{
                    type : 'category',
                    name : 'Tasks',
                    icon : '/static/icons/icons8_exercise_96px.png',
                    blocks : [
                        'create task',
                        'start task',
                        'stop task'
                    ]
                },*/
                /*{
                    type : 'category',
                    name : 'Arrays',
                    icon : '/static/icons/icons8_stack_96px.png',
                    blocks : [
                        'lists_create_empty',
                        'lists_repeat',
                        'lists_reverse',
                        'lists_isEmpty',
                        'lists_length',
                        'lists_create_with',
                        'lists_indexOf',
                        'lists_getIndex',
                        'lists_setIndex',
                        'lists_getSublist',
                        'lists_sort',
                        'lists_split',
                    ]
                },*/
                {
                    type : 'category',
                    name : 'Text',
                    icon : '/static/icons/icons8_text_color_96px.png',
                    blocks : [
                        'basic_string',                        
                        { xml : 
                            `<block type="text_length">
                                <value name="VALUE">
                                    <shadow type="basic_string">
                                        <field name="VALUE">Hello world!</field>
                                    </shadow>
                                </value>                                    
                            </block>`
                        },
                        'text_join',                        
                        { xml : 
                            `<block type="text_append">
                                <value name="TEXT">
                                    <shadow type="basic_string">
                                        <field name="VALUE">Hello world!</field>
                                    </shadow>
                                </value>                                    
                            </block>`
                        },
                        { xml : 
                                `<block type="text_isEmpty">
                                    <value name="VALUE">
                                        <shadow type="basic_string">
                                            <field name="VALUE">Hello world!</field>
                                        </shadow>
                                    </value>                                    
                                </block>`
                        },
                        { xml : 
                            `<block type="text_indexOf">
                                <value name="VALUE">
                                    <shadow type="basic_string">
                                        <field name="VALUE">Hello world!</field>
                                    </shadow>
                                </value>                                    
                            </block>`
                        },
                        { xml : 
                            `<block type="text_charAt">
                                <value name="VALUE">
                                    <shadow type="basic_string">
                                        <field name="VALUE">Hello world!</field>
                                    </shadow>
                                </value>                                    
                            </block>`
                        },
                        { xml : 
                            `<block type="text_getSubstring">
                                <value name="STRING">
                                    <shadow type="basic_string">
                                        <field name="VALUE">Hello world!</field>
                                    </shadow>
                                </value>                                    
                            </block>`
                        },
                        { xml : 
                            `<block type="text_changeCase">
                                <value name="TEXT">
                                    <shadow type="basic_string">
                                        <field name="VALUE">Hello world!</field>
                                    </shadow>
                                </value>                                    
                            </block>`
                        },
                        { xml : 
                            `<block type="text_trim">
                                <value name="TEXT">
                                    <shadow type="basic_string">
                                        <field name="VALUE">Hello world!</field>
                                    </shadow>
                                </value>                                    
                            </block>`
                        },
                        { xml : 
                            `<block type="text_replace">
                                <value name="TEXT">
                                    <shadow type="basic_string">
                                        <field name="VALUE">Hello world!</field>
                                    </shadow>
                                </value>                                    
                            </block>`
                        },
                        //'text_compare',
                        //'text_parse_int'
                    ]
                },
                {
                    type : 'category',
                    name : 'WiFi',
                    icon : '/static/icons/icons8_wifi_router_96px.png',
                    blocks : [
                        'wifi_connect',    
                        'wifi_ap',
                        /*{
                            xml : 
                                `<block type="wifi_http_get">
                                    <value name="url">
                                        <shadow type="basic_string">
                                            <field name="VALUE">Hello world!</field>
                                        </shadow>
                                    </value>
                                </block>`
                        },
                        {
                            xml : 
                                `<block type="wifi_http_post">
                                    <value name="url">
                                        <shadow type="basic_string">
                                            <field name="VALUE">Hello world!</field>
                                        </shadow>
                                    </value>
                                    <value name="data">
                                        <shadow type="basic_string">
                                            <field name="VALUE">Hello world!</field>
                                        </shadow>
                                    </value>
                                </block>`
                        },*/                   
                        'wifi_start_server',
                        'wifi_server_on',
                        {
                            xml : 
                                `<block type="wifi_server_send">
                                    <value name="text">
                                        <shadow type="basic_string">
                                            <field name="VALUE">Hello world!</field>
                                        </shadow>
                                    </value>
                                </block>`
                        },
                        
                        'wifi_get_ip_addr',
                        'wifi_get_ap_ip_addr',
                        'wifi_get_arg'
                    ]
                },
                {
                    type : 'category',
                    name : 'Bluetooth',
                    icon : '/static/icons/icons8_bluetooth_2_96px.png',
                    blocks : [
                        'bt_start',
                        {
                            xml : 
                                `<block type="bt_send_string">
                                    <value name="text">
                                        <shadow type="basic_string">
                                            <field name="VALUE">Hello world!</field>
                                        </shadow>
                                    </value>
                                </block>`
                        },
                        'bt_on_receive',
                        'bt_read_data',
                        'bt_read_line'
                    ]
                },
                {
                    type : 'category',
                    name : 'Serial',
                    icon : '/static/icons/SVG/13.svg',
                    blocks : [
                        'serial_usb_init',
                        'serial_hardware_init',
                        'serial_available',
                        {
                            xml : 
                                `<block type="serial_write_data">
                                    <value name="text">
                                        <shadow type="basic_string">
                                            <field name="VALUE">Hello world!</field>
                                        </shadow>
                                    </value>
                                </block>`
                        },
                        'serial_write_newline',                        
                        'serial_read_line',
                        'serial_read_until',
                        'basic_string'
                    ]
                }
            ]
        }
    ]
}