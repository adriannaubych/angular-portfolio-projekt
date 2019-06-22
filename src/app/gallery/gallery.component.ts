import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent {

  pictures = [
    'https://static.maxmodels.pl/photos/4/9/53/4953dec9d51ef3c9310c85534717f9ab_224644.jpg',
    'https://static.maxmodels.pl/photos/a/0/65/a06526dafcd327b692adc8e19a38a842_224644.jpg',
    'https://static.maxmodels.pl/photos/d/c/6a/dc6ab1410297a659be15c21bc3fe833f_224644.jpg',
    'https://static.maxmodels.pl/photos/a/f/2f/af2fb43fdd019c9328338496fecbdbdb_224644.jpg',
    'https://static.maxmodels.pl/photos/d/0/f1/d0f10e49800e9bcff83980af202b5a0d_224644.jpg',
    'https://static.maxmodels.pl/photos/7/e/2a/7e2aff3c25c150cd081358847dceb731_224644.jpg',
    'https://static.maxmodels.pl/photos/b/c/f3/bcf312e056d46934ceae1d419a8a20dd_224644.jpg',
    'https://static.maxmodels.pl/photos/4/c/34/4c34d0273212be2a6ae03653572b3323_224644.jpg',
    'https://static.maxmodels.pl/photos/6/a/d2/6ad2da7a3ea7eb670197d598f4706a92_224644.jpg',
    'https://static.maxmodels.pl/photos/6/3/86/6386695315a24b45fdf24bd484e8a670_224644.jpg',
    'https://static.maxmodels.pl/photos/4/6/28/4628328a003da717694fdc8ab7d0bf88_224644.jpg',
    'https://static.maxmodels.pl/photos/d/b/fe/dbfe349afa20e1e4a545658ce622b2ed_224644.jpg',
    'https://static.maxmodels.pl/photos/d/2/69/d2694093e930c6536576f441525360be_224644.jpg',
    'https://static.maxmodels.pl/photos/f/0/bd/f0bd4d3505b52f9ed261e98209c0479d_224644.jpg',
    'https://static.maxmodels.pl/photos/b/4/10/b410a9484e4970818723babe152c571d_224644.jpg',
    'https://static.maxmodels.pl/photos/4/0/ed/40ed3210b5cf878a4e3154170e58d358_224644.jpg',
    'https://static.maxmodels.pl/photos/c/f/f5/cff5753e837cf0b3b7831f7442556ecf_224644.jpg',
    'https://static.maxmodels.pl/photos/c/f/37/cf37b3140c53ca34d304f56cc6272df7_224644.jpg',
    'https://static.maxmodels.pl/photos/2/7/75/2775ba55706f4427b5f04cfcf700758d_224644.jpg',
    'https://static.maxmodels.pl/photos/c/4/ba/c4ba11b80cec3eddfd173d314286a06b_224644.jpg',
    'https://static.maxmodels.pl/photos/9/9/41/9941c8d16958364680632efc3e858e49_224644.jpg',
    'https://static.maxmodels.pl/photos/0/0/17/0017e3f4e2fc145f4a80440ce4f53bda_224644.jpg',
    'https://static.maxmodels.pl/photos/d/3/77/d377b3dbdc91ddcd57d9a022bb179af1_224644.jpg',
    'https://static.maxmodels.pl/photos/f/3/dc/f3dc7fda9ae12cd940779d6be8bafa5e_224644.jpg',
    'https://static.maxmodels.pl/photos/9/1/32/9132c5bb864f6e7aa24ec3a8f1d491a0_224644.jpg',
    'https://static.maxmodels.pl/photos/2/1/61/21618d8cc9fce23ba788ba3f1f9c9687_224644.jpg',
    'https://static.maxmodels.pl/photos/e/3/cf/e3cf10a35473c163c2faf62b31f94bc9_224644.jpg',
    'https://static.maxmodels.pl/photos/e/3/32/e3327864c541b2c9b9cd768473e03110_224644.jpg',
    'https://static.maxmodels.pl/photos/5/b/ad/5bad0cef7a7692e6053db27f97b5b66b_224644.jpg',
    'https://static.maxmodels.pl/photos/9/4/68/94684b39480e42120cb45a4fda73c5e6_224644.jpg',
    'https://static.maxmodels.pl/photos/5/9/51/5951f9685eaf0ea8927d603388a8e272_224644.jpg',
    'https://static.maxmodels.pl/photos/4/a/9b/4a9bc3cd268a4f66faaf9dee1fee52d3_224644.jpg',
    'https://static.maxmodels.pl/photos/1/d/be/1dbe061b28621cb78cf9a2f58041318e_224644.jpg',
    'https://static.maxmodels.pl/photos/3/a/f8/3af8d5c86706f107246ad953bd6e4c5e_224644.jpg',
    'https://static.maxmodels.pl/photos/7/e/7a/7e7a8912f92cecf9f0b8750a3e0ebdc6_224644.jpg',
    'https://static.maxmodels.pl/photos/4/a/f1/4af1942fcc947d8b366800102059bb85_224644.jpg',
    'https://static.maxmodels.pl/photos/4/9/ae/49ae3d9070624debede77e549f940972_224644.jpg',
    'https://static.maxmodels.pl/photos/f/3/5b/f35ba7849d517643be2ebcd1987e790c_224644.jpg',
    'https://static.maxmodels.pl/photos/8/a/9b/8a9bf69a26d979cca53a3a71aef6fdc9_224644.jpg',
    'https://static.maxmodels.pl/photos/8/8/3f/883f059057f0498295362d7ed390f4ea_224644.jpg',
    'https://static.maxmodels.pl/photos/1/9/ca/19ca020144f4b0947cbbf7aec8d40434_224644.jpg',
    'https://static.maxmodels.pl/photos/9/b/32/9b32fbcf5acd7e461be6892f93d7b9f2_224644.jpg',
    'https://static.maxmodels.pl/photos/7/8/ea/78ea0e39572784cdae752ac6d2a20a29_224644.jpg',
    'https://static.maxmodels.pl/photos/a/8/54/a8540132d38e580c1bc08f6c4f032fc6_224644.jpg',
    'https://static.maxmodels.pl/photos/1/9/e1/19e1a8f733feede2d4f646eee1df83b2_224644.jpg',
    'https://static.maxmodels.pl/photos/8/f/28/8f2873558b0a15af40bfbf452e4c10bb_224644.jpg',
    'https://static.maxmodels.pl/photos/3/c/c4/3cc42964c7793d35bb6dedb163635dcc_224644.jpg',
    'https://static.maxmodels.pl/photos/4/c/26/4c26016a3c41afb8e6550e617bff2db5_224644.jpg',
    'https://static.maxmodels.pl/photos/e/8/d7/e8d7fb13ec2028f3f1adb171e91cfae8_224644.jpg',
    'https://static.maxmodels.pl/photos/e/9/ac/e9acbcec8befc7ee7630ea51a26cbb11_224644.jpg',
    'https://static.maxmodels.pl/photos/1/a/72/1a72604a37457e30a53519fc58f4811a_224644.jpg',
    'https://static.maxmodels.pl/photos/6/a/63/6a636e122e8aefd1d98b909d9c650745_224644.jpg',
    'https://static.maxmodels.pl/photos/3/3/41/3341839c094b20846d3426538007f06b_224644.jpg',
    'https://static.maxmodels.pl/photos/9/d/fd/9dfda111ea7424d56a4275aa38375ab3_224644.jpg',
    'https://static.maxmodels.pl/photos/3/0/db/30db348d70464f793c8c87b853a6c829_224644.jpg',
    'https://static.maxmodels.pl/photos/8/7/73/8773f77bc0ed9ef64cf8ca1489faf539_224644.jpg',
    'https://static.maxmodels.pl/photos/0/d/ab/0dab21fb26e3000d8f5964ed21fc6232_224644.jpg',
    'https://static.maxmodels.pl/photos/f/f/e6/ffe69e5b9955ff0e96877f8f28ae5cd6_224644.jpg',
    'https://static.maxmodels.pl/photos/b/2/9b/b29bce0e59a5e235e5d4c9f6cd153c51_224644.jpg',
    'https://static.maxmodels.pl/photos/b/e/da/bedaaa5b269e58fc5c98c6cce551f150_224644.jpg',
    'https://static.maxmodels.pl/photos/8/3/79/8379804a35f229d0b4f70811e8b0c45a_224644.jpg',
    'https://static.maxmodels.pl/photos/0/1/1a/011a1415b679a6e41ca03932ad36aa2f_224644.jpg',
    'https://static.maxmodels.pl/photos/b/8/91/b891faff978b34ce8b356b46cbc3fb12_224644.jpg',
    'https://static.maxmodels.pl/photos/7/5/08/7508d6eef368ca9e2e74fbf7b975ebd6_224644.jpg',
    'https://static.maxmodels.pl/photos/2/5/a4/25a46fd20e4198943d779c54256adbe8_224644.jpg',
    'https://static.maxmodels.pl/photos/e/e/90/ee90139548dba0095e3d32bc97bd61b2_224644.jpg',
    'https://static.maxmodels.pl/photos/a/0/49/a049dec0df9c0ef131507588d6b02852_224644.jpg',
    'https://static.maxmodels.pl/photos/f/c/09/fc09af763f254725725c970adf3c0903_224644.jpg',
    'https://static.maxmodels.pl/photos/6/8/61/6861752734cc0148fbb1ec55e9269f5f_224644.jpg',
    'https://static.maxmodels.pl/photos/e/7/ec/e7ec3ff9ecf940a980a34bf2dc2a2fba_224644.jpg',
    'https://static.maxmodels.pl/photos/8/9/c0/89c0567b273f0bd91bede0cc05a48762_224644.jpg',
    'https://static.maxmodels.pl/photos/2/0/b1/20b131b4cfdbe12ce638b1c93922a815_224644.jpg',
    'https://static.maxmodels.pl/photos/7/3/1e/731e7c846455c3a6f112677e402a970a_224644.jpg',
    'https://static.maxmodels.pl/photos/7/a/8f/7a8f3ff79cc1a88bc0035145e85156c1_224644.jpg',
    'https://static.maxmodels.pl/photos/d/4/08/d408c3820e2647359fc8769cade85242_224644.jpg'
  ];

  currentPictureIndex = 0;

  selectPicture(pictureIndex) {
    this.currentPictureIndex = pictureIndex;
  }

  prev() {
    this.currentPictureIndex = this.currentPictureIndex - 1;
  }

  next() {
    this.currentPictureIndex = this.currentPictureIndex + 1;
  }

}