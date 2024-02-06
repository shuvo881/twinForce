import { LightningElement, track } from 'lwc';

export default class Temp1ServiceComp extends LightningElement {
    services = [
        [
            {
                id: 11,
                title: 'Scalable System Design',
                icon_name:'standard:system_and_global_variable',
                body: 'High-performing product giving you a tailored solution for your business.',
            },
            {
                id: 12,
                title: 'Cloud Services',
                icon_name:'standard:dynamic_record_choice',
                body: 'Cloud outsourcing provider managed cloud services for businesses.',
            },
            {
                id: 13,
                title: 'DevOps Services',
                icon_name: 'custom:custom67',
                body: 'DevOps consulting services based on modern tools & technologies.'
            },
            {
                id: 14,
                title: 'Big Data & Data Science',
                icon_name: 'standard:data_graph',
                body: 'Drive business transformation through data analytics'
            },
        ],

        [
            {
                id: 21,
                title: 'Database Management',
                icon_name: 'standard:dataset',
                body: 'DBMS establish the relationship between datasets, and how users interact with them.'
            },
            {
                id: 22,
                title: 'Embedded System Design',
                icon_name: 'custom:custom63',
                body: 'Provide high-quality embedded system design and embedded architecture design services'
            },
            {
                id: 23,
                title: 'Mobile Application Dev',
                icon_name: 'custom:custom28',
                body: 'We build your apps for all the devices out there.'
            },
            {
                id: 24,
                title: 'UX Design',
                icon_name: 'standard:service_report',
                body:'UX design ensures the quality of user journey of your digital products and services.'
            },
        ],

        [
            {
                id: 31,
                title: 'SQA',
                icon_name: 'standard:qualifications',
                body:'Software test lifecycle services; from test planning to execution and everything in between.'
            },
            {
                id: 32,
                title:'',
                icon_name: 'standard:',
                body:'',
            },
            {
                id: 33,
                title:'',
                icon_name: 'standard:',
                body:'',
            },
            {
                id: 34,
                title:'',
                icon_name: 'standard:',
                body:'',
            },
        ],
    ]
}