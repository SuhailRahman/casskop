(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{127:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=d(a),m=n,u=b["".concat(s,".").concat(m)]||b[m]||p[m]||r;return a?o.a.createElement(u,i(i({ref:t},l),{},{components:a})):o.a.createElement(u,i({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<r;l++)s[l]=a[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},72:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(2),o=a(6),r=(a(0),a(127)),s={id:"3_storage",title:"Storage",sidebar_label:"Storage"},i={unversionedId:"3_configuration_deployment/3_storage",id:"3_configuration_deployment/3_storage",isDocsHomePage:!1,title:"Storage",description:"Configuration",source:"@site/docs/3_configuration_deployment/3_storage.md",slug:"/3_configuration_deployment/3_storage",permalink:"/casskop/docs/3_configuration_deployment/3_storage",editUrl:"https://github.com/Orange-OpenSource/casskop/edit/master/website/docs/3_configuration_deployment/3_storage.md",version:"current",sidebar_label:"Storage",sidebar:"docs",previous:{title:"Cassandra Cluster",permalink:"/casskop/docs/3_configuration_deployment/2_cassandra_cluster"},next:{title:"Cluster topology - Cassandra rack aware deployments",permalink:"/casskop/docs/3_configuration_deployment/4_cluster_topology"}},c=[{value:"Configuration",id:"configuration",children:[{value:"Storage class",id:"storage-class",children:[]},{value:"Storage scope",id:"storage-scope",children:[]}]},{value:"Persistent volume claim management",id:"persistent-volume-claim-management",children:[]},{value:"Additional storage configurations",id:"additional-storage-configurations",children:[]}],l={rightToc:c};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"Cassandra is a stateful application. It needs to store data on disks. CassKop allows you to configure the type of\nstorage you want to use."),Object(r.b)("h3",{id:"storage-class"},"Storage class"),Object(r.b)("p",null,"We recommend using a ",Object(r.b)("strong",{parentName:"p"},"custom StorageClass")," to leverage the volume binding mode ",Object(r.b)("inlineCode",{parentName:"p"},"WaitForFirstConsumer")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: exampleStorageclass\nparameters:\n  type: pd-standard\nprovisioner: kubernetes.io/gce-pd\nreclaimPolicy: Delete\nvolumeBindingMode: WaitForFirstConsumer\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Remember to set your CassandraCluster CRD properly to use the newly created StorageClass."))),Object(r.b)("h3",{id:"storage-scope"},"Storage scope"),Object(r.b)("p",null,"Storage can be configured using the ",Object(r.b)("inlineCode",{parentName:"p"},"storage")," property in ",Object(r.b)("inlineCode",{parentName:"p"},"CassandraCluster.spec")," for global Data Centers configuration, or can be overriden at ",Object(r.b)("inlineCode",{parentName:"p"},"CassandraCluster.spec.topology.dc")," level."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Once the Cassandra cluster is deployed, the storage cannot be changed."))),Object(r.b)("p",null,"Persistent storage uses Persistent Volume Claims to provision persistent volumes for storing data.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"PersistentVolumeClaim")," can use a ",Object(r.b)("inlineCode",{parentName:"p"},"StorageClass")," to trigger automatic volume provisioning."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"It is recommended to use local-storage with quick ssd disk access for low latency. We have only tested the\n",Object(r.b)("inlineCode",{parentName:"p"},"local-storage")," storage class within CassKop.")),Object(r.b)("p",null,"CassandraCluster fragment of persistent storage definition :"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'...\n  # Global configuration\n  dataCapacity: "300Gi"\n  dataStorageClass: "local-storage"\n  deletePVC: true\n  ...\n  topology:\n     dc:\n       - name: dc1\n         # DC level configuration\n         dataCapacity: "10Gi"\n         dataStorageClass: "test-storage"\n         ...\n       - name: dc2\n         ...\n  ...\n...\n\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dataCapacity"),' (required): Defines the size of the persistent volume claim, for example, "1000Gi".'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dataStorageClass"),"(optional): Define the type of storage to use (or use\ndefault one). We recommand to use local-storage for better performances but\nit can be any storage with high ssd througput."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"deletePVC"),"(optional): Boolean value which specifies if the Persistent Volume Claim has to be deleted when the cluster\nis deleted. Default is ",Object(r.b)("inlineCode",{parentName:"li"},"false"),".")),Object(r.b)("p",null,"In this example, all statefulsets related to the ",Object(r.b)("inlineCode",{parentName:"p"},"dc2")," will have the default configuration for the ",Object(r.b)("inlineCode",{parentName:"p"},"data")," PV :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dataCapacity")," : 300Gi"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dataStorageClass"),": local-storage")),Object(r.b)("p",null,"All statefulsets related to the ",Object(r.b)("inlineCode",{parentName:"p"},"dc1")," will have the specific configuration for the ",Object(r.b)("inlineCode",{parentName:"p"},"data")," PV :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dataCapacity")," : 10Gi"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dataStorageClass")," : test-storage")),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Resizing persistent storage for existing CassandraCluster is not currently supported. You must decide the\nnecessary storage size before deploying the cluster."))),Object(r.b)("p",null,"The above example requires that each node has 300Gi of data volumes to persist the Cassandra data's using the\nlocal-storage storage class provider.\nThe parameter deletePVC is used to control if the data storage must persist when the according statefulset is deleted."),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If we don't specify dataCapacity, then CassKop will use the Docker Container ephemeral storage, and\nall data will be lost in case of a cassandra node reboot."))),Object(r.b)("h2",{id:"persistent-volume-claim-management"},"Persistent volume claim management"),Object(r.b)("p",null,"When the persistent storage is used, it will create PersistentVolumeClaims with the following names:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"data-<cluster-name>-<dc-name>-<rack-name>-<idx>")),Object(r.b)("p",null,"Persistent Volume Claim for the volume used for storing data of the cluster ",Object(r.b)("inlineCode",{parentName:"p"},"<cluster-name>")," for the Cassandra DC\n",Object(r.b)("inlineCode",{parentName:"p"},"<dc-name>")," and the rack ",Object(r.b)("inlineCode",{parentName:"p"},"<rack-name>")," for the Pod with ID ",Object(r.b)("inlineCode",{parentName:"p"},"<idx>"),"."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Note that with local-storage the PVC object makes a link between the pod and the node. While this\nobject exists the pod will be sticked to the node chosen by the scheduler. If you want to move the\nCassandra node to a new Kubernetes node, you will need to manually delete the associated PVC so that the\nscheduler can choose another node for scheduling. This is covered in the Operation document."))),Object(r.b)("h2",{id:"additional-storage-configurations"},"Additional storage configurations"),Object(r.b)("p",null,"For extra needs not covered by the default volumes managed through the CassandraCluster CRD, we are allowing you to define your own storage configurations.\nTo do this, you will configure the ",Object(r.b)("inlineCode",{parentName:"p"},"storageConfigs")," property in ",Object(r.b)("inlineCode",{parentName:"p"},"CassandraCluster.Spec"),". These volumes can then be used by additional sidecars if needed (see next page on sidecars)."),Object(r.b)("p",null,"CassandraCluster fragment for dynamic persistent storage definition :"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'# ...\n     storageConfigs:\n        - mountPath: "/var/lib/cassandra/log"\n          name: "gc-logs"\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: local-storage\n            resources:\n              requests:\n                storage: 5Gi\n        - mountPath: "/var/log/cassandra"\n          name: "cassandra-logs"\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: local-storage\n            resources:\n              requests:\n                storage: 10Gi\n# ...\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"storageConfigs")," ",Object(r.b)("em",{parentName:"li"},"(required)")," : Defines the list of storage config object, which will instantiate ",Object(r.b)("inlineCode",{parentName:"li"},"Persitence Volume Claim")," and associate volume to pod of cassandra node.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mountPath")," ",Object(r.b)("em",{parentName:"li"},"(required)")," : Defines the path into ",Object(r.b)("inlineCode",{parentName:"li"},"cassandra container")," where the volume will be mounted."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name")," ",Object(r.b)("em",{parentName:"li"},"(required)")," : Used to define the ",Object(r.b)("inlineCode",{parentName:"li"},"PVC")," and ",Object(r.b)("inlineCode",{parentName:"li"},"VolumeMount")," names."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pvcSpec")," ",Object(r.b)("em",{parentName:"li"},"(required)")," : pvcSpec describes the PVC used for the mountPath described above it requires a kubernetes PVC spec.")))),Object(r.b)("p",null,"With the above configuration, the following configuration will be added to the ",Object(r.b)("inlineCode",{parentName:"p"},"rack statefulset")," definition :"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# ...\n  volumeMounts:\n  #...\n  - mountPath: /var/lib/cassandra/log\n    name: gc-logs\n  - mountPath: /var/log/cassandra\n    name: cassandra-logs\n  #...\n# ...\n  volumeClaimTemplates:\n  #...\n  - metadata:\n      name: gc-logs\n      labels:\n        app: cassandracluster\n        cassandracluster: cassandra-demo\n        cassandraclusters.db.orange.com.dc: dcsts\n        cassandraclusters.db.orange.com.rack: rack1\n        cluster: casskop\n        dc-rack: dcsts-rack1\n    spec:\n      accessModes:\n      - ReadWriteOnce\n      resources:\n        requests:\n          storage: 5Gi\n      storageClassName: local-storage\n      volumeMode: Filesystem\n  - metadata:\n      name: cassandra-logs\n      labels:\n        app: cassandracluster\n        cassandracluster: cassandra-demo\n        cassandraclusters.db.orange.com.dc: dcsts\n        cassandraclusters.db.orange.com.rack: rack1\n        cluster: casskop\n        dc-rack: dcsts-rack1\n    spec:\n      accessModes:\n      - ReadWriteOnce\n      resources:\n        requests:\n          storage: 5Gi\n      storageClassName: local-storage\n      volumeMode: Filesystem\n  #...\n# ...\n")))}d.isMDXComponent=!0}}]);