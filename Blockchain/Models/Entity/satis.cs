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
    
    public partial class satis
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public satis()
        {
            this.kullaniciSatis = new HashSet<kullaniciSatis>();
        }
    
        public int satisId { get; set; }
        public string saticiUsername { get; set; }
        public string aliciUsername { get; set; }
        public string urunKategori { get; set; }
        public string urunMiktar { get; set; }
        public Nullable<int> urunFiyat { get; set; }
        public string urunName { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<kullaniciSatis> kullaniciSatis { get; set; }
    }
}