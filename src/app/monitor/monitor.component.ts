import { MonitorService } from './../monitor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styles: []
})
export class MonitorComponent implements OnInit {
  lists = [];
  constructor(
    private monitorService: MonitorService
  ) { }

  async ngOnInit() {
    await this.getContainers('203.157.103.124:443');
    await this.getContainers('203.157.103.125:443');
    await this.getContainers('203.157.103.126:443');
    // tslint:disable-next-line:max-line-length
    // const rs = [{ 'Id': 'fd5f1a65c2ae8a4d7d7715517031ed0294b0a4075f5eb3f195af76adfe044d85', 'Names': ['/mmis-test'], 'Image': 'mophos/mmis', 'ImageID': 'sha256:aef811af5cfd631b1a375edaa4f49551974cf5908bf7ae4a0c5c8935556e75d4', 'Command': '/bin/sh -c ', 'Created': 1533484080, 'Ports': [{ 'IP': '0.0.0.0', 'PrivatePort': 80, 'PublicPort': 8080, 'Type': 'tcp' }], 'Labels': { 'maintainer': 'Satit Rianpit <rianpit@gmail.com>' }, 'State': 'running', 'Status': 'Up About an hour', 'HostConfig': { 'NetworkMode': 'default' }, 'NetworkSettings': { 'Networks': { 'bridge': { 'IPAMConfig': null, 'Links': null, 'Aliases': null, 'NetworkID': '0fa9a59643d24afa56afc9a97d3616d665bb90209ad5250524cb2a9c3fe698da', 'EndpointID': '5df24a2d04569c5bde29e52d0d217b84777ce267f89086f21777c935a3632331', 'Gateway': '172.17.0.1', 'IPAddress': '172.17.0.3', 'IPPrefixLen': 16, 'IPv6Gateway': '', 'GlobalIPv6Address': '', 'GlobalIPv6PrefixLen': 0, 'MacAddress': '02:42:ac:11:00:03', 'DriverOpts': null } } }, 'Mounts': [{ 'Type': 'bind', 'Source': '/root/mmis-config-test', 'Destination': '/home/mmis/mmis-config', 'Mode': '', 'RW': true, 'Propagation': 'rprivate' }, { 'Type': 'bind', 'Source': '/root/uploaded', 'Destination': '/home/mmis/uploaded', 'Mode': '', 'RW': true, 'Propagation': 'rprivate' }] }, { 'Id': '7c199574a0a72e9f502be190885b996c1172c88bfc1d20c79fadd8171e80c54a', 'Names': ['/mmis-samutsakhon'], 'Image': 'mophos/mmis', 'ImageID': 'sha256:aef811af5cfd631b1a375edaa4f49551974cf5908bf7ae4a0c5c8935556e75d4', 'Command': '', 'Created': 1533484078, 'Ports': [{ 'IP': '0.0.0.0', 'PrivatePort': 80, 'PublicPort': 80, 'Type': 'tcp' }], 'Labels': { 'maintainer': 'Satit Rianpit <rianpit@gmail.com>' }, 'State': 'exited', 'Status': 'Exited About an hour', 'HostConfig': { 'NetworkMode': 'default' }, 'NetworkSettings': { 'Networks': { 'bridge': { 'IPAMConfig': null, 'Links': null, 'Aliases': null, 'NetworkID': '0fa9a59643d24afa56afc9a97d3616d665bb90209ad5250524cb2a9c3fe698da', 'EndpointID': '9954739a3f82b786396768bbe68ae986e1ece426262e02720bea782819aaec03', 'Gateway': '172.17.0.1', 'IPAddress': '172.17.0.2', 'IPPrefixLen': 16, 'IPv6Gateway': '', 'GlobalIPv6Address': '', 'GlobalIPv6PrefixLen': 0, 'MacAddress': '02:42:ac:11:00:02', 'DriverOpts': null } } }, 'Mounts': [{ 'Type': 'bind', 'Source': '/root/mmis-config-samut', 'Destination': '/home/mmis/mmis-config', 'Mode': '', 'RW': true, 'Propagation': 'rprivate' }, { 'Type': 'bind', 'Source': '/root/uploaded', 'Destination': '/home/mmis/uploaded', 'Mode': '', 'RW': true, 'Propagation': 'rprivate' }] }, { 'Id': '7c199574a0a72e9f502be190885b996c1172c88bfc1d20c79fadd8171e80c54a', 'Names': ['/mmis-samutsakhon'], 'Image': 'mophos/mmis', 'ImageID': 'sha256:aef811af5cfd631b1a375edaa4f49551974cf5908bf7ae4a0c5c8935556e75d4', 'Command': '', 'Created': 1533484078, 'Ports': [{ 'IP': '0.0.0.0', 'PrivatePort': 80, 'PublicPort': 80, 'Type': 'tcp' }], 'Labels': { 'maintainer': 'Satit Rianpit <rianpit@gmail.com>' }, 'State': 'stop', 'Status': 'Exited About an hour', 'HostConfig': { 'NetworkMode': 'default' }, 'NetworkSettings': { 'Networks': { 'bridge': { 'IPAMConfig': null, 'Links': null, 'Aliases': null, 'NetworkID': '0fa9a59643d24afa56afc9a97d3616d665bb90209ad5250524cb2a9c3fe698da', 'EndpointID': '9954739a3f82b786396768bbe68ae986e1ece426262e02720bea782819aaec03', 'Gateway': '172.17.0.1', 'IPAddress': '172.17.0.2', 'IPPrefixLen': 16, 'IPv6Gateway': '', 'GlobalIPv6Address': '', 'GlobalIPv6PrefixLen': 0, 'MacAddress': '02:42:ac:11:00:02', 'DriverOpts': null } } }, 'Mounts': [{ 'Type': 'bind', 'Source': '/root/mmis-config-samut', 'Destination': '/home/mmis/mmis-config', 'Mode': '', 'RW': true, 'Propagation': 'rprivate' }, { 'Type': 'bind', 'Source': '/root/uploaded', 'Destination': '/home/mmis/uploaded', 'Mode': '', 'RW': true, 'Propagation': 'rprivate' }] }];
    // this.pushData(rs);


  }

  async getContainers(ip) {
    try {
      const rs: any = await this.monitorService.getContainers(ip);
      if (rs) {
        this.pushData(rs);
      }
    } catch (error) {
      console.log(error);
    }
  }

  pushData(data) {
    for (const v of data) {
      if (v.names[0].substring(1, 9) !== 'portainer') {
        v.Names[0] = v.Names[0].substring(1, v.Names[0].length);
        this.lists.push(v);
      }
    }
  }
}
