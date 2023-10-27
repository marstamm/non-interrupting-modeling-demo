import BpmnModeler from 'bpmn-js/lib/Modeler';
import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule,
  ZeebePropertiesProviderModule 
} from 'bpmn-js-properties-panel';

import 'diagram-js/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import '@bpmn-io/properties-panel/dist/assets/properties-panel.css';
import 'bpmn-js-element-templates/dist/assets/element-templates.css';

import {
  CloudElementTemplatesPropertiesProviderModule // Camunda 8 Element Templates
} from 'bpmn-js-element-templates';

import elementTemplateChooserModule from '@bpmn-io/element-template-chooser';
import iconRendererModule from '@bpmn-io/element-template-icon-renderer';


import allTemplates from './src/templates/all-templates.json';
import xml from 'bundle-text:./src/empty.xml'
import zeebeModdle from 'zeebe-bpmn-moddle/resources/zeebe.json';


const modeler = new BpmnModeler({
  container: '.modeler',
  propertiesPanel: {
    parent: '.properties'
  },
  additionalModules: [
    BpmnPropertiesPanelModule,
    BpmnPropertiesProviderModule,
    ZeebePropertiesProviderModule,
    CloudElementTemplatesPropertiesProviderModule,
    elementTemplateChooserModule,
    iconRendererModule
  ],
  elementTemplates: allTemplates,
  moddleExtensions: {
    zeebe: zeebeModdle
  },
  keyboard: {
    bindTo: document
  }
});

modeler.importXML(xml);