using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiniProjectCore.Model
{
    public class Source
    {
        public int Id { get; set; }
        public string Source_Code { get; set; }
        public string Source_Name { get; set; }
        public string Agent_Group { get; set; }
        public string Source_Group { get; set; }
        public string HBE { get; set; }
        public double Commission { get; set; }
        public string Log_Source { get; set; }
        public int Country_Id { get; set; }
    }
}
