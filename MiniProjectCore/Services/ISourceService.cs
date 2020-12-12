using MiniProjectCore.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiniProjectCore.Services
{
    public interface ISourceService
    {
        Source CreateSourceId(Source sourceOptions);
        Source GetSourceId(int id);
        List<Source> GetAllSourceIds();
        Source UpdateSourceId(Source sourceOptions);
        bool DeleteSourceId(int id);
    }
}
