//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Blockchain.Models.Entity
{
    using System;
    using System.Collections.Generic;
    
    public partial class kullaniciUrunler
    {
        public int kullaniciUrunlerId { get; set; }
        public int kullaniciId { get; set; }
        public int urunId { get; set; }
    
        public virtual kullanici kullanici { get; set; }
        public virtual urunler urunler { get; set; }
    }
}
