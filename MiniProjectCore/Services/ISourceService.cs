using MiniProjectCore.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiniProjectCore.Services
{
    public interface ISourceService
    {
        Source CreateSource(Source sourceOptions);
        Source GetSource(int id);
        List<Source> GetAllSources();
        Source UpdateSource(int id, Source sourceOptions);
        bool DeleteSource(int id);
    }
}
