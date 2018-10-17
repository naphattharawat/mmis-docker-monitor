import { MonitorService } from './../monitor.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import * as isOnline from 'is-online';
@Component({
  selector: 'app-monitor2',
  templateUrl: './monitor2.component.html',
  styles: []
})
export class Monitor2Component implements OnInit {
  lists = [];
  listTrellos = [];
  internet: boolean;
  constructor(
    private monitorService: MonitorService
  ) { }

  async ngOnInit() {

    this.getData();
    setInterval(async () => {
      await this.getData();
    }, 5000);

    this.getTrello();
    setInterval(async () => {
      await this.getTrello();
    }, 15000);



    // }
    // tslint:disable-next-line:max-line-length
    // const rs = [{ 'Id': 'fd5f1a65c2ae8a4d7d7715517031ed0294b0a4075f5eb3f195af76adfe044d85', 'Names': ['/mmis-test'], 'Image': 'mophos/mmis', 'ImageID': 'sha256:aef811af5cfd631b1a375edaa4f49551974cf5908bf7ae4a0c5c8935556e75d4', 'Command': '/bin/sh -c ', 'Created': 1533484080, 'Ports': [{ 'IP': '0.0.0.0', 'PrivatePort': 80, 'PublicPort': 8080, 'Type': 'tcp' }], 'Labels': { 'maintainer': 'Satit Rianpit <rianpit@gmail.com>' }, 'State': 'running', 'Status': 'Up About an hour', 'HostConfig': { 'NetworkMode': 'default' }, 'NetworkSettings': { 'Networks': { 'bridge': { 'IPAMConfig': null, 'Links': null, 'Aliases': null, 'NetworkID': '0fa9a59643d24afa56afc9a97d3616d665bb90209ad5250524cb2a9c3fe698da', 'EndpointID': '5df24a2d04569c5bde29e52d0d217b84777ce267f89086f21777c935a3632331', 'Gateway': '172.17.0.1', 'IPAddress': '172.17.0.3', 'IPPrefixLen': 16, 'IPv6Gateway': '', 'GlobalIPv6Address': '', 'GlobalIPv6PrefixLen': 0, 'MacAddress': '02:42:ac:11:00:03', 'DriverOpts': null } } }, 'Mounts': [{ 'Type': 'bind', 'Source': '/root/mmis-config-test', 'Destination': '/home/mmis/mmis-config', 'Mode': '', 'RW': true, 'Propagation': 'rprivate' }, { 'Type': 'bind', 'Source': '/root/uploaded', 'Destination': '/home/mmis/uploaded', 'Mode': '', 'RW': true, 'Propagation': 'rprivate' }] }, { 'Id': '7c199574a0a72e9f502be190885b996c1172c88bfc1d20c79fadd8171e80c54a', 'Names': ['/mmis-samutsakhon'], 'Image': 'mophos/mmis', 'ImageID': 'sha256:aef811af5cfd631b1a375edaa4f49551974cf5908bf7ae4a0c5c8935556e75d4', 'Command': '', 'Created': 1533484078, 'Ports': [{ 'IP': '0.0.0.0', 'PrivatePort': 80, 'PublicPort': 80, 'Type': 'tcp' }], 'Labels': { 'maintainer': 'Satit Rianpit <rianpit@gmail.com>' }, 'State': 'exited', 'Status': 'Exited About an hour', 'HostConfig': { 'NetworkMode': 'default' }, 'NetworkSettings': { 'Networks': { 'bridge': { 'IPAMConfig': null, 'Links': null, 'Aliases': null, 'NetworkID': '0fa9a59643d24afa56afc9a97d3616d665bb90209ad5250524cb2a9c3fe698da', 'EndpointID': '9954739a3f82b786396768bbe68ae986e1ece426262e02720bea782819aaec03', 'Gateway': '172.17.0.1', 'IPAddress': '172.17.0.2', 'IPPrefixLen': 16, 'IPv6Gateway': '', 'GlobalIPv6Address': '', 'GlobalIPv6PrefixLen': 0, 'MacAddress': '02:42:ac:11:00:02', 'DriverOpts': null } } }, 'Mounts': [{ 'Type': 'bind', 'Source': '/root/mmis-config-samut', 'Destination': '/home/mmis/mmis-config', 'Mode': '', 'RW': true, 'Propagation': 'rprivate' }, { 'Type': 'bind', 'Source': '/root/uploaded', 'Destination': '/home/mmis/uploaded', 'Mode': '', 'RW': true, 'Propagation': 'rprivate' }] }, { 'Id': '7c199574a0a72e9f502be190885b996c1172c88bfc1d20c79fadd8171e80c54a', 'Names': ['/mmis-samutsakhon'], 'Image': 'mophos/mmis', 'ImageID': 'sha256:aef811af5cfd631b1a375edaa4f49551974cf5908bf7ae4a0c5c8935556e75d4', 'Command': '', 'Created': 1533484078, 'Ports': [{ 'IP': '0.0.0.0', 'PrivatePort': 80, 'PublicPort': 80, 'Type': 'tcp' }], 'Labels': { 'maintainer': 'Satit Rianpit <rianpit@gmail.com>' }, 'State': 'stop', 'Status': 'Exited About an hour', 'HostConfig': { 'NetworkMode': 'default' }, 'NetworkSettings': { 'Networks': { 'bridge': { 'IPAMConfig': null, 'Links': null, 'Aliases': null, 'NetworkID': '0fa9a59643d24afa56afc9a97d3616d665bb90209ad5250524cb2a9c3fe698da', 'EndpointID': '9954739a3f82b786396768bbe68ae986e1ece426262e02720bea782819aaec03', 'Gateway': '172.17.0.1', 'IPAddress': '172.17.0.2', 'IPPrefixLen': 16, 'IPv6Gateway': '', 'GlobalIPv6Address': '', 'GlobalIPv6PrefixLen': 0, 'MacAddress': '02:42:ac:11:00:02', 'DriverOpts': null } } }, 'Mounts': [{ 'Type': 'bind', 'Source': '/root/mmis-config-samut', 'Destination': '/home/mmis/mmis-config', 'Mode': '', 'RW': true, 'Propagation': 'rprivate' }, { 'Type': 'bind', 'Source': '/root/uploaded', 'Destination': '/home/mmis/uploaded', 'Mode': '', 'RW': true, 'Propagation': 'rprivate' }] }];
    // this.pushData(rs);


  }

  async getData() {
    // await this.getTrello();
    await this.checkConnect();
    await this.getContainers('203.157.103.125:443');
    await this.getContainers('203.157.103.136:443');
    await this.getContainers('203.157.102.76:443');
    await this.getContainers('203.157.103.126:443');
    await this.getContainers('203.157.103.128:443');
    await this.getContainers('203.157.103.129:443');
    await this.getContainers('203.157.103.137:443');
    await this.getContainers('203.157.103.138:443');
    await this.getContainers('203.157.103.124:443');
  }
  async getContainers(ip) {
    try {
      // const rs: any = [{ 'Id': 'fd5f1a65c2ae8a4d7d7715517031ed0294b0a4075f5eb3f195af76adfe044d85', 'Names': ['/mmis.moph.go.th'], 'Image': 'mophos/mmis', 'ImageID': 'sha256:aef811af5cfd631b1a375edaa4f49551974cf5908bf7ae4a0c5c8935556e75d4', 'Command': '/bin/sh -c ', 'Created': 1533484080, 'Ports': [{ 'IP': '0.0.0.0', 'PrivatePort': 80, 'PublicPort': 8080, 'Type': 'tcp' }], 'Labels': { 'maintainer': 'Satit Rianpit <rianpit@gmail.com>' }, 'State': 'running', 'Status': 'Up About an hour', 'HostConfig': { 'NetworkMode': 'default' }, 'NetworkSettings': { 'Networks': { 'bridge': { 'IPAMConfig': null, 'Links': null, 'Aliases': null, 'NetworkID': '0fa9a59643d24afa56afc9a97d3616d665bb90209ad5250524cb2a9c3fe698da', 'EndpointID': '5df24a2d04569c5bde29e52d0d217b84777ce267f89086f21777c935a3632331', 'Gateway': '172.17.0.1', 'IPAddress': '172.17.0.3', 'IPPrefixLen': 16, 'IPv6Gateway': '', 'GlobalIPv6Address': '', 'GlobalIPv6PrefixLen': 0, 'MacAddress': '02:42:ac:11:00:03', 'DriverOpts': null } } }, 'Mounts': [{ 'Type': 'bind', 'Source': '/root/mmis-config-test', 'Destination': '/home/mmis/mmis-config', 'Mode': '', 'RW': true, 'Propagation': 'rprivate' }, { 'Type': 'bind', 'Source': '/root/uploaded', 'Destination': '/home/mmis/uploaded', 'Mode': '', 'RW': true, 'Propagation': 'rprivate' }] }, { 'Id': '7c199574a0a72e9f502be190885b996c1172c88bfc1d20c79fadd8171e80c54a', 'Names': ['/mmis-samutsakhon'], 'Image': 'mophos/mmis', 'ImageID': 'sha256:aef811af5cfd631b1a375edaa4f49551974cf5908bf7ae4a0c5c8935556e75d4', 'Command': '', 'Created': 1533484078, 'Ports': [{ 'IP': '0.0.0.0', 'PrivatePort': 80, 'PublicPort': 80, 'Type': 'tcp' }], 'Labels': { 'maintainer': 'Satit Rianpit <rianpit@gmail.com>' }, 'State': 'exited', 'Status': 'Exited About an hour', 'HostConfig': { 'NetworkMode': 'default' }, 'NetworkSettings': { 'Networks': { 'bridge': { 'IPAMConfig': null, 'Links': null, 'Aliases': null, 'NetworkID': '0fa9a59643d24afa56afc9a97d3616d665bb90209ad5250524cb2a9c3fe698da', 'EndpointID': '9954739a3f82b786396768bbe68ae986e1ece426262e02720bea782819aaec03', 'Gateway': '172.17.0.1', 'IPAddress': '172.17.0.2', 'IPPrefixLen': 16, 'IPv6Gateway': '', 'GlobalIPv6Address': '', 'GlobalIPv6PrefixLen': 0, 'MacAddress': '02:42:ac:11:00:02', 'DriverOpts': null } } }, 'Mounts': [{ 'Type': 'bind', 'Source': '/root/mmis-config-samut', 'Destination': '/home/mmis/mmis-config', 'Mode': '', 'RW': true, 'Propagation': 'rprivate' }, { 'Type': 'bind', 'Source': '/root/uploaded', 'Destination': '/home/mmis/uploaded', 'Mode': '', 'RW': true, 'Propagation': 'rprivate' }] }, { 'Id': '7c199574a0a72e9f502be190885b996c1172c88bfc1d20c79fadd8171e80c54a', 'Names': ['/mmis-samutsakhon'], 'Image': 'mophos/mmis', 'ImageID': 'sha256:aef811af5cfd631b1a375edaa4f49551974cf5908bf7ae4a0c5c8935556e75d4', 'Command': '', 'Created': 1533484078, 'Ports': [{ 'IP': '0.0.0.0', 'PrivatePort': 80, 'PublicPort': 80, 'Type': 'tcp' }], 'Labels': { 'maintainer': 'Satit Rianpit <rianpit@gmail.com>' }, 'State': 'stop', 'Status': 'Exited About an hour', 'HostConfig': { 'NetworkMode': 'default' }, 'NetworkSettings': { 'Networks': { 'bridge': { 'IPAMConfig': null, 'Links': null, 'Aliases': null, 'NetworkID': '0fa9a59643d24afa56afc9a97d3616d665bb90209ad5250524cb2a9c3fe698da', 'EndpointID': '9954739a3f82b786396768bbe68ae986e1ece426262e02720bea782819aaec03', 'Gateway': '172.17.0.1', 'IPAddress': '172.17.0.2', 'IPPrefixLen': 16, 'IPv6Gateway': '', 'GlobalIPv6Address': '', 'GlobalIPv6PrefixLen': 0, 'MacAddress': '02:42:ac:11:00:02', 'DriverOpts': null } } }, 'Mounts': [{ 'Type': 'bind', 'Source': '/root/mmis-config-samut', 'Destination': '/home/mmis/mmis-config', 'Mode': '', 'RW': true, 'Propagation': 'rprivate' }, { 'Type': 'bind', 'Source': '/root/uploaded', 'Destination': '/home/mmis/uploaded', 'Mode': '', 'RW': true, 'Propagation': 'rprivate' }] }];
      // rs[0].Id = rs[0].Id + ip;
      const rs: any = await this.monitorService.getContainers(ip);
      if (rs) {
        this.pushData(rs, ip);
      }
    } catch (error) {
      console.log(error);
    }
  }

  checkConnect() {
    isOnline().then(online => {
      if (online) {
        this.internet = true;
        // console.log('We have internet');
      } else {
        this.internet = false;
        // console.log('Houston we have a problem');
      }
    });
  }

  pushData(data, ip) {
    // for (const i of this.lists) {
    //   // const idp = _.findIndex()
    //   if (i.ip === ip.substring(0, ip.length - 4)) {
    //     const idx = _.findIndex(this.lists, { 'Id': i.id });
    //     this.lists.splice(idx, 1);
    //   }
    // }
    for (const v of data) {
      if (v.Names[0].substring(1, 10) !== 'portainer') {
        const idx = _.findIndex(this.lists, { 'Id': v.Id });

        v.ip = ip.substring(0, ip.length - 4);
        // if(v.)
        if (idx > -1) {
          if (this.lists[idx].State !== 'removing') {
            this.lists[idx].Status = v.Status;
            this.lists[idx].State = v.State;
          } else {
            this.lists.splice(idx, 1);
          }
        } else {
          if (v.State !== 'removing') {
            v.Names[0] = v.Names[0].substring(1, v.Names[0].length);
            this.lists.push(v);
          }
        }

        // v.ip = ip;
      }
    }
  }

  async getTrello() {
    try {
      const list: any = await this.monitorService.getTrelloList('5b5fd6c46b03b634243d5229');
      // console.log(list);

      if (list) {
        for (const v of list) {
          const members = [];
          if (v.idMembers.length) {
            for (const i of v.idMembers) {
              const member: any = await this.monitorService.getTrelloMember(i);
              members.push(member);
            }
          } else {
            members.push({
              initials: ''
            });
          }
          // if (members.length) {
          v.member = members;
          // }
        }
        this.listTrellos = list;
        console.log(list);

        // this.pushData(rs, ip);
      }
    } catch (error) {
      console.log(error);
    }
  }
}