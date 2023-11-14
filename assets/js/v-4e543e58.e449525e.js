"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[92212],{769315:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-4e543e58","path":"/devices/TS0601_thermostat.html","title":"TuYa TS0601_thermostat control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa TS0601_thermostat control via MQTT","description":"Integrate your TuYa TS0601_thermostat via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-30T12:58:50.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Local temperature","slug":"local-temperature","link":"#local-temperature","children":[]},{"level":3,"title":"Controlling device specific features","slug":"controlling-device-specific-features","link":"#controlling-device-specific-features","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Child lock (lock)","slug":"child-lock-lock","link":"#child-lock-lock","children":[]},{"level":3,"title":"Window detection (switch)","slug":"window-detection-switch","link":"#window-detection-switch","children":[]},{"level":3,"title":"Window open (binary)","slug":"window-open-binary","link":"#window-open-binary","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Valve detection (switch)","slug":"valve-detection-switch","link":"#valve-detection-switch","children":[]},{"level":3,"title":"Position (numeric)","slug":"position-numeric","link":"#position-numeric","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Auto lock (switch)","slug":"auto-lock-switch","link":"#auto-lock-switch","children":[]},{"level":3,"title":"Away mode (switch)","slug":"away-mode-switch","link":"#away-mode-switch","children":[]},{"level":3,"title":"Away preset days (numeric)","slug":"away-preset-days-numeric","link":"#away-preset-days-numeric","children":[]},{"level":3,"title":"Boost time (numeric)","slug":"boost-time-numeric","link":"#boost-time-numeric","children":[]},{"level":3,"title":"Comfort temperature (numeric)","slug":"comfort-temperature-numeric","link":"#comfort-temperature-numeric","children":[]},{"level":3,"title":"Eco temperature (numeric)","slug":"eco-temperature-numeric","link":"#eco-temperature-numeric","children":[]},{"level":3,"title":"Force (enum)","slug":"force-enum","link":"#force-enum","children":[]},{"level":3,"title":"Max temperature (numeric)","slug":"max-temperature-numeric","link":"#max-temperature-numeric","children":[]},{"level":3,"title":"Min temperature (numeric)","slug":"min-temperature-numeric","link":"#min-temperature-numeric","children":[]},{"level":3,"title":"Away preset temperature (numeric)","slug":"away-preset-temperature-numeric","link":"#away-preset-temperature-numeric","children":[]},{"level":3,"title":"Programming mode (composite)","slug":"programming-mode-composite","link":"#programming-mode-composite","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1699992179000},"filePathRelative":"devices/TS0601_thermostat.md"}')},626679:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var a=o(166252);const s=(0,a._)("h1",{id:"tuya-ts0601-thermostat",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#tuya-ts0601-thermostat","aria-hidden":"true"},"#"),(0,a.Uk)(" TuYa TS0601_thermostat")],-1),n=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),i=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"TS0601_thermostat")],-1),c=(0,a._)("td",null,"Vendor",-1),r=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Radiator valve with thermostat")],-1),p=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"lock (state), switch (state), window_open, battery_low, position, climate (current_heating_setpoint, local_temperature, system_mode, local_temperature_calibration, preset, running_state), away_preset_days, boost_time, comfort_temperature, eco_temperature, force, max_temperature, min_temperature, away_preset_temperature, programming_mode, linkquality")],-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_thermostat.jpg",alt:"TuYa TS0601_thermostat"})])],-1),u=(0,a._)("tr",null,[(0,a._)("td",null,"White-label"),(0,a._)("td",null,"Moes HY368, Moes HY369RT, SHOJZJ 378RT, Silvercrest TVR01, Immax 07732B, Evolveo Heat M30")],-1),d=(0,a.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>While pairing, keep the valve close to the coordinator.</p><ol><li><em>Turn the display on</em>: Short press home (🏠).</li><li><em>Enter settings</em>: Long press home (🏠) for 3sec.</li><li><em>Select WiFi settings</em>: Press the plus button (➕) button 4 times to see the digital <strong><code>5</code></strong> on the right hand side and the blinking WiFi logo.</li><li><em>Enter WiFi settings</em>: Press home (🏠) once again. Now only WiFi logo is showing without blinking.</li><li><em>Enable pairing mode</em>: Long press home (🏠). WiFi logo is now blinking.</li><li><em>Keep display on</em>: Touch home (🏠) every few seconds.</li></ol><h3 id="local-temperature" tabindex="-1"><a class="header-anchor" href="#local-temperature" aria-hidden="true">#</a> Local temperature</h3><p>If you&#39;d like to force device to send local_temperature you can use this MQTT command:</p><ul><li><code>topic</code>: zigbee2mqtt/FRIENDLY_NAME/set/local_temperature_calibration</li><li><code>payload</code>: YOUR_CURRENT_CALIBRATION_VALUE</li></ul><p>YOUR_CURRENT_CALIBRATION_VALUE can be 0, but if you calibrated temperature for this device send current value. After this command thermostat responds with two messages. One for calibration change confirmation, and other with current local_temperature.</p><h3 id="controlling-device-specific-features" tabindex="-1"><a class="header-anchor" href="#controlling-device-specific-features" aria-hidden="true">#</a> Controlling device specific features</h3><ul><li><p>If all you need is to control on and off, you can set &quot;force&quot; with topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>.</p><p>The payload values are:<br> open -&gt; fully opens valve and stays there<br> close -&gt; fully closes valve and stays there<br> normal -&gt; normal valve operation</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;force&quot;</span><span class="token operator">:</span> <span class="token string">&quot;open&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Use topic <code>zigbee2mqtt/FRIENDLY_NAME/set/schedule</code> to set the schedule of the device with 6 timeslots on workdays or holidays (e.g. weekend). Example payload values are:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;workdays&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>\n        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">21</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">15</span><span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;holidays&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>\n        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">21</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">15</span><span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>You can set &quot;week&quot; schedule pattern with topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>. The payload values are: 5+2 -&gt; to be used when workdays for example are monday-friday and saturday &amp; sunday are holidays 6+1 -&gt; to be used when workdays for example are monday-saturday and sunday is a holiday 7 -&gt; to be used when workdays schedule will be used for the whole week</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;week&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5+2&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>You can set &quot;boost time&quot; with topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>. But be aware that it rounds the values down to multiple of 100.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;boost_time&quot;</span><span class="token operator">:</span> <span class="token number">200</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>You can set &quot;comfort temperature&quot; level on the device with topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;comfort_temperature&quot;</span><span class="token operator">:</span> <span class="token number">21</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>You can set &quot;eco temperature&quot; level on the device with topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;eco_temperature&quot;</span><span class="token operator">:</span> <span class="token number">17</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>',10),h=(0,a._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,a.Uk)(" OTA updates")],-1),m=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="child-lock-lock" tabindex="-1"><a class="header-anchor" href="#child-lock-lock" aria-hidden="true">#</a> Child lock (lock)</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="window-detection-switch" tabindex="-1"><a class="header-anchor" href="#window-detection-switch" aria-hidden="true">#</a> Window detection (switch)</h3><p>The current state of this switch is in the published state under the <code>window_detection</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_detection&quot;: &quot;ON&quot;}</code>, <code>{&quot;window_detection&quot;: &quot;OFF&quot;}</code> or <code>{&quot;window_detection&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="window-open-binary" tabindex="-1"><a class="header-anchor" href="#window-open-binary" aria-hidden="true">#</a> Window open (binary)</h3><p>Window open?. Value can be found in the published state on the <code>window_open</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> window open is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="valve-detection-switch" tabindex="-1"><a class="header-anchor" href="#valve-detection-switch" aria-hidden="true">#</a> Valve detection (switch)</h3><p>The current state of this switch is in the published state under the <code>valve_detection</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;valve_detection&quot;: &quot;ON&quot;}</code>, <code>{&quot;valve_detection&quot;: &quot;OFF&quot;}</code> or <code>{&quot;valve_detection&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="position-numeric" tabindex="-1"><a class="header-anchor" href="#position-numeric" aria-hidden="true">#</a> Position (numeric)</h3><p>Position. Value can be found in the published state on the <code>position</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>local_temperature_calibration</code>, <code>preset</code>, <code>running_state</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>35</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device, in the <code>heat</code> mode the TS0601 will remain continuously heating, i.e. it does not regulate to the desired temperature. If you want TRV to properly regulate the temperature you need to use mode <code>auto</code> instead setting the desired temperature.. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>heat</code>, <code>auto</code>, <code>off</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>schedule</code>, <code>manual</code>, <code>boost</code>, <code>complex</code>, <code>comfort</code>, <code>eco</code>, <code>away</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to be used in the local_temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-9</code> and the maximum value is <code>9</code> with a step size of <code>0.5</code>.</li></ul><h3 id="auto-lock-switch" tabindex="-1"><a class="header-anchor" href="#auto-lock-switch" aria-hidden="true">#</a> Auto lock (switch)</h3><p>The current state of this switch is in the published state under the <code>auto_lock</code> property (value is <code>AUTO</code> or <code>MANUAL</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_lock&quot;: &quot;AUTO&quot;}</code>, <code>{&quot;auto_lock&quot;: &quot;MANUAL&quot;}</code> or <code>{&quot;auto_lock&quot;: &quot;undefined&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="away-mode-switch" tabindex="-1"><a class="header-anchor" href="#away-mode-switch" aria-hidden="true">#</a> Away mode (switch)</h3><p>The current state of this switch is in the published state under the <code>away_mode</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;away_mode&quot;: &quot;ON&quot;}</code>, <code>{&quot;away_mode&quot;: &quot;OFF&quot;}</code> or <code>{&quot;away_mode&quot;: &quot;undefined&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="away-preset-days-numeric" tabindex="-1"><a class="header-anchor" href="#away-preset-days-numeric" aria-hidden="true">#</a> Away preset days (numeric)</h3><p>Away preset days. Value can be found in the published state on the <code>away_preset_days</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;away_preset_days&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="boost-time-numeric" tabindex="-1"><a class="header-anchor" href="#boost-time-numeric" aria-hidden="true">#</a> Boost time (numeric)</h3><p>Boost time. Value can be found in the published state on the <code>boost_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;boost_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>900</code>. The unit of this value is <code>s</code>.</p><h3 id="comfort-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#comfort-temperature-numeric" aria-hidden="true">#</a> Comfort temperature (numeric)</h3><p>Comfort temperature. Value can be found in the published state on the <code>comfort_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;comfort_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>30</code>. The unit of this value is <code>°C</code>.</p><h3 id="eco-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#eco-temperature-numeric" aria-hidden="true">#</a> Eco temperature (numeric)</h3><p>Eco temperature. Value can be found in the published state on the <code>eco_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;eco_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="force-enum" tabindex="-1"><a class="header-anchor" href="#force-enum" aria-hidden="true">#</a> Force (enum)</h3><p>Force the valve position. Value can be found in the published state on the <code>force</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;force&quot;: NEW_VALUE}</code>. The possible values are: <code>normal</code>, <code>open</code>, <code>close</code>.</p><h3 id="max-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#max-temperature-numeric" aria-hidden="true">#</a> Max temperature (numeric)</h3><p>Maximum temperature. Value can be found in the published state on the <code>max_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>16</code> and the maximum value is <code>70</code>. The unit of this value is <code>°C</code>.</p><h3 id="min-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#min-temperature-numeric" aria-hidden="true">#</a> Min temperature (numeric)</h3><p>Minimum temperature. Value can be found in the published state on the <code>min_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>15</code>. The unit of this value is <code>°C</code>.</p><h3 id="away-preset-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#away-preset-temperature-numeric" aria-hidden="true">#</a> Away preset temperature (numeric)</h3><p>Away preset temperature. Value can be found in the published state on the <code>away_preset_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;away_preset_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-10</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="programming-mode-composite" tabindex="-1"><a class="header-anchor" href="#programming-mode-composite" aria-hidden="true">#</a> Programming mode (composite)</h3><p>Schedule MODE ⏱ - In this mode, the device executes a preset week programming temperature time and temperature..</p><ul><li><code>week</code> (enum): Week format user for schedule allowed values: <code>5+2</code>, <code>6+1</code>, <code>7</code></li><li><code>workdays_schedule</code> (text)</li><li><code>holidays_schedule</code> (text)</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',41),k={},b=(0,o(983744).Z)(k,[["render",function(e,t){const o=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),s,(0,a._)("table",null,[n,(0,a._)("tbody",null,[i,(0,a._)("tr",null,[c,(0,a._)("td",null,[(0,a.Wm)(o,{to:"/supported-devices/#v=TuYa"},{default:(0,a.w5)((()=>[(0,a.Uk)("TuYa")])),_:1})])]),r,p,l,u])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),d,(0,a.kq)(" Notes END: Do not edit below this line "),h,(0,a._)("p",null,[(0,a.Uk)("This device supports OTA updates, for more information see "),(0,a.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("OTA updates")])),_:1}),(0,a.Uk)(".")]),m])}]])}}]);