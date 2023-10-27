import BpmnModeler from 'bpmn-js/lib/Modeler';
import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule,
} from 'bpmn-js-properties-panel';

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